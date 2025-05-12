import { Center, Heading, SimpleGrid, Box, Image, Text, Badge, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { data } from '../utils/data';

export const RecipeListPage = ({ onRecipeSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");

  //Filter recipes op basis van search input
  const filteredRecipes = data.hits.filter(item =>
    item.recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Center flexDir="column" p={6} width="100%" bg="blue.300">
      <Heading textAlign="center">Winc Recipe Checker</Heading> 

      {/* Search Input */}
      <Input
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mt={4}
        width="300px"
        borderColor="white"
        borderWidth="2px"
        focusBorderColor="black"
      />

      {/* Recipe Grid */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6} mt={6}>
        {filteredRecipes.map((item) => (
          <Box 
            key={item.recipe.label} 
            p={4} 
            borderWidth="1px" 
            borderRadius="lg" 
            cursor="pointer"
            onClick={() => onRecipeSelect(item.recipe)}
            _hover={{ bg: "gray.100" }}
            width="100%"
            textAlign="center"
          >
          
            <Box bg="white" p={2} borderRadius="md">
              <Image 
                src={item.recipe.image} 
                alt={item.recipe.label} 
                borderRadius="md" 
                width="500px" 
                height="200px" 
                objectFit="cover"
              />
            </Box>

            {/* Recipe Info */}
            <Heading size="md" mt={3}>{item.recipe.label}</Heading>
            <Text fontSize="sm">Meal Type: {item.recipe.mealType.join(", ")}</Text>
            <Text fontSize="sm">Dish Type: {item.recipe.dishType.join(", ")}</Text>
            <Text fontSize="sm">Diet: {item.recipe.dietLabels.length > 0 ? item.recipe.dietLabels.join(", ") : "N/A"}</Text>
            <Text fontSize="sm" color="red.500">Cautions: {item.recipe.cautions.length > 0 ? item.recipe.cautions.join(", ") : "None"}</Text>

            {/*  Health Labels */}
            <Box mt={2}>
              {item.recipe.healthLabels.includes("Vegan") && <Badge colorScheme="green">Vegan</Badge>}
              {item.recipe.healthLabels.includes("Vegetarian") && <Badge colorScheme="purple">Vegetarian</Badge>}
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Center>
  );
};
