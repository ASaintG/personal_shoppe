import React from 'react';
import pythonImage from '../assets/books/Python.png';
import apisImage from '../assets/books/apis.png';
import ciberseguridadImage from '../assets/books/ciberseguridad.png';
import IOTImage from '../assets/books/IOT.png';
import JavaImage from '../assets/books/Java.png'
import javascriptImage from '../assets/books/JavaScript.png';
import PHPImage from '../assets/books/PHP.png'
import programacionEstructuradaImage from '../assets/books/programaciónEstructurada.png';
import { Card, Heading, CardBody, CardFooter, Stack, Text, Divider, Image, ButtonGroup, Button, SimpleGrid } from '@chakra-ui/react';

// Definir un objeto con la información de las tarjetas
const cardData = [
  {
    id: 1,
    image: pythonImage,
    title: 'Python',
    description: 'This sofa is perfect for modern tropical spaces.',
    price: '$450'
  },
  {
    id: 2,
    image: apisImage,
    title: 'APis',
    description: 'A stylish chair that fits any modern decor.',
    price: '$250'
  },
  {
    id:3,
    image: ciberseguridadImage,
    title: 'Ciber Seguridad',
    description: 'A stylish chair that fits any modern decor.',
    price: '$250'
  },
  {
    id:4,
    image: IOTImage,
    title: 'IOT',
    description: 'A stylish chair that fits any modern decor.',
    price: '$250'
  },
  {
    id: 5,
    image: JavaImage,
    title: 'Java',
    description: 'This sofa is perfect for modern tropical spaces.',
    price: '$450'
  },
  {
    id: 6,
    image: javascriptImage,
    title: 'JavaScript',
    description: 'A stylish chair that fits any modern decor.',
    price: '$250'
  },
  {
    id:7,
    image: PHPImage,
    title: 'PHP',
    description: 'A stylish chair that fits any modern decor.',
    price: '$250'
  },
  {
    id:8,
    image: programacionEstructuradaImage,
    title: 'Programacion Estructurada',
    description: 'A stylish chair that fits any modern decor.',
    price: '$250'
  }

];

const Cards = ({ addToCart }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="20px" pt={20}>
      {cardData.map((card) => (
        <Card key={card.id} maxW="sm">
          <CardBody>
            <Image src={card.image} alt={card.title} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{card.title}</Heading>
              <Text>{card.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                {card.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => addToCart(card)}
            >
              Add to cart
            </Button>

            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default Cards;

