import React from 'react';
import { Box, Heading, Stack, Text, Divider, Button } from '@chakra-ui/react';

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

  return (
    <Box p={4}>
      <Heading size="lg">Your Cart</Heading>
      <Divider my={4} />
      <Stack spacing={4}>
        {cartItems.length === 0 ? (
          <Text>Your cart is empty.</Text>
        ) : (
          cartItems.map((item, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" p={4}>
              <Heading size="md">{item.title}</Heading>
              <Text>{item.description}</Text>
              <Text color="blue.600" fontSize="lg">{item.price}</Text>
              <Button 
                colorScheme="red" 
                onClick={() => removeFromCart(index)}
              >
                Remove
              </Button>
            </Box>
          ))
        )}
      </Stack>
      <Divider my={4} />
      <Text fontSize="xl" fontWeight="bold">Total: ${total.toFixed(2)}</Text>
    </Box>
  );
};

export default Cart;
