import styles from './pokemon-item.module.css';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const PokemonItem = ({ pokemon }) => {
  const [isFrontImage, setIsFrontImage] = useState(true);

  const setFront = () => {
    setIsFrontImage(true);
  };

  const setBack = () => {
    setIsFrontImage(false);
  };

  return (
    <div className={styles['pokemon-item']}>
      <Link href={`/${pokemon?.name}`}>
        <div className={styles['image-container']}>
          <Image
            src={isFrontImage ? pokemon?.front_image : pokemon?.back_image}
            alt={pokemon?.name}
            width={150}
            height={150}
          />
        </div>
      </Link>
      <div className={styles['details-container']}>
        <p>ID: {pokemon?.id + 1}</p>
        <p>{pokemon?.name}</p>
      </div>
      <div className={styles['button-container']}>
        <button onClick={setFront}>Front</button>
        <button onClick={setBack}>Back</button>
      </div>
    </div>
  );
};
