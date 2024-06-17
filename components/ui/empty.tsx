import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  const width = 783 * 0.46;
  const height = 1024 * 0.46;

  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-[470.72px] w-[360.98px]">
        <Image src="/empty.png" layout="responsive" width={width} height={height} alt="Empty" />
      </div>
      <p className="text-muted-foreground text-sm text-center">
        {label}
      </p>
    </div>
  );
};
