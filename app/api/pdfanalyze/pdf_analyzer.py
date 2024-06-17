import PyPDF2
import sys
import json
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from sentence_transformers import SentenceTransformer
import weaviate
import base64
import io

def extract_text_from_pdf(file):
    reader = PyPDF2.PdfReader(file)
    text = ""
    for page in reader.pages:
        text += page.extract_text()
    return text

def analyze_sentiment(text):
    analyzer = SentimentIntensityAnalyzer()
    sentiment = analyzer.polarity_scores(text)
    return sentiment

def generate_embeddings(text):
    model = SentenceTransformer('all-MiniLM-L6-v2')
    embeddings = model.encode([text])
    return embeddings.tolist()

def store_embeddings_in_weaviate(text, embeddings):
    client = weaviate.Client("http://localhost:8080")
    
    class_obj = {
        "class": "PDFDocument",
        "properties": [
            {"name": "text", "dataType": ["text"]},
            {"name": "embedding", "dataType": ["blob"]},
        ]
    }
    
    try:
        client.schema.create_class(class_obj)
    except weaviate.exceptions.SchemaValidationException:
        pass  # Assume class already exists

    data_obj = {
        "text": text,
        "embedding": embeddings
    }
    client.data_object.create(data_obj, class_name="PDFDocument")

def main(pdf_path):
    with open(pdf_path, "rb") as file:
        text = extract_text_from_pdf(file)
    sentiment = analyze_sentiment(text)
    embeddings = generate_embeddings(text)
    store_embeddings_in_weaviate(text, embeddings)
    result = {
        "text": text,
        "sentiment": sentiment,
        "embeddings": embeddings
    }
    print(json.dumps(result))

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python pdf_analyzer.py <path_to_pdf>")
        sys.exit(1)
    pdf_path = sys.argv[1]
    main(pdf_path)
