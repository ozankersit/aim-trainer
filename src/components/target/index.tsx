type Props = {
    xPoint?: number;
    yPoint?: number;
    generateRandomPoint: () => void;
  };
  
  export default function Target({ xPoint, yPoint, generateRandomPoint }: Props) {
    return (
      <div
        className="absolute w-4 h-4 bg-red-500 rounded-full"
        style={{ top: `${yPoint}px`, left: `${xPoint}px` }} // tailwind ile dinamik olarak classları almıyor tekrardan bir denicem
        onClick={generateRandomPoint}
      />
    );
  }
  