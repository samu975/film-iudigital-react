import { Card, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  nombrePelicula: string;
  description: string;
  image: string;
  id: string;
}

export default function MovieCard({
  nombrePelicula,
  description,
  image,
  id,
}: CardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`film/${id}`} className="flex justify-center ">
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={500}
          width={400}
          src={image}
        />

        {isHovered && (
          <>
            <div className="mt-1 mb-2 max-w-[400px]">
              <CardHeader className="font-bold text-lg">
                {nombrePelicula}
              </CardHeader>

              <div className="text-white/80 mb-6 line-clamp-5 overflow-hidden px-4">
                {description}
              </div>
            </div>
          </>
        )}

        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-center text-white/80 w-full">Detalle</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
