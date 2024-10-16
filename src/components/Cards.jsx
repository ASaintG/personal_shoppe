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
    title: 'Python para Todos: Programación Sencilla y Poderosa',
    description: 'Descubre por qué Python es el lenguaje favorito de muchos programadores. Este libro te lleva desde los conceptos básicos hasta la creación de scripts avanzados y aplicaciones completas. Ideal para quienes desean aprender programación de manera accesible y efectiva.',
    price: '$5'
  },
  {
    id: 2,
    image: apisImage,
    title: 'APIs y RESTful: Conectando Aplicaciones de Forma Eficiente',
    description: 'Aprende a diseñar, crear y consumir APIs con este libro que abarca desde los principios básicos de RESTful hasta la construcción de servicios complejos. Ideal para desarrolladores que buscan conectar aplicaciones y servicios de forma segura y eficiente, potenciando la comunicación entre sistemas.',
    price: '$30'
  },
  {
    id:3,
    image: ciberseguridadImage,
    title: 'Ciberseguridad: Protege tus Aplicaciones y Datos',
    description: 'En un mundo cada vez más digital, la ciberseguridad es fundamental. Este libro te enseñará las mejores prácticas y técnicas para proteger tus aplicaciones y sistemas frente a las amenazas más comunes. Aprende sobre criptografía, análisis de vulnerabilidades y mucho más para mantener tus datos seguros.',
    price: '$20'
  },
  {
    id:4,
    image: IOTImage,
    title: 'Internet de las Cosas (IoT): Conectando el Mundo',
    description: 'Conviértete en un experto en IoT con este libro que abarca desde la configuración de dispositivos hasta la creación de sistemas conectados. Aprende a construir proyectos inteligentes que integren sensores y actuadores, y cómo comunicarte con ellos a través de internet. Ideal para aquellos interesados en el futuro de la tecnología conectada.',
    price: '$17'
  },
  {
    id: 5,
    image: JavaImage,
    title: 'Java Completo: Desde Principiante hasta Experto',
    description: 'Domina uno de los lenguajes más versátiles y demandados del mercado con este libro. Aprende desde los conceptos básicos de Java hasta la programación orientada a objetos, manejo de bases de datos y desarrollo de aplicaciones robustas. Ideal para quienes buscan una carrera sólida en desarrollo de software.',
    price: '$25'
  },
  {
    id: 6,
    image: javascriptImage,
    title: 'JavaScript: Domina la Web Interactiva',
    description: 'Sumérgete en el mundo del desarrollo web con este completo libro de JavaScript. Aprende desde los conceptos básicos hasta técnicas avanzadas para crear sitios web interactivos, dinámicos y modernos. Perfecto para quienes quieren llevar sus habilidades de programación al siguiente nivel y dominar el lenguaje más popular para la web.',
    price: '$5'
  },
  {
    id:7,
    image: PHPImage,
    title: 'PHP Avanzado: Desarrollo Web Profesional',
    description: 'Explora las capacidades de PHP para crear aplicaciones web robustas y escalables. Este libro te guiará desde los fundamentos hasta la creación de APIs y la integración de bases de datos, permitiéndote desarrollar sitios web de alto rendimiento con técnicas avanzadas de programación',
    price: '$10'
  },
  {
    id:8,
    image: programacionEstructuradaImage,
    title: 'Programación Estructurada: Fundamentos Sólidos para Programadores',
    description: 'Este libro es la base perfecta para quienes quieren entender a fondo la programación. A través de ejemplos claros y ejercicios prácticos, aprenderás los principios de la programación estructurada y desarrollarás la lógica necesaria para enfrentar cualquier desafío de codificación.',
    price: '$20'
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

