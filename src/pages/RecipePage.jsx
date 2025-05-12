import { Box, Button, Image, Heading, Text, VStack, Badge, SimpleGrid, Divider, } from '@chakra-ui/react';
import React from 'react';

export const RecipePage = ({ recipe, onBack }) => {
  const nutritionalInfo = [
    { label: "Energy", value: `${Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)} kcal` },
    { label: "Protein", value: `${Math.round(recipe.totalNutrients.PROCNT.quantity)} g` },
    { label: "Fat", value: `${Math.round(recipe.totalNutrients.FAT.quantity)} g` },
    { label: "Carbs", value: `${Math.round(recipe.totalNutrients.CHOCDF.quantity)} g` },
    { label: "Cholesterol", value: `${Math.round(recipe.totalNutrients.CHOLE.quantity)} mg` },
    { label: "Sodium", value: `${Math.round(recipe.totalNutrients.NA.quantity)} mg` },
  ];

  const recipeDetails = [
    { label: "Meal Type", value: recipe.mealType.join(", ") },
    { label: "Dish Type", value: recipe.dishType.join(", ") },
    { label: "Total Time", value: `${recipe.totalTime} min` },
    { label: "Servings", value: `${recipe.yield}` },
  ];

  const healthLabels = recipe.healthLabels || [];
  const cautions = recipe.cautions || [];

  return (
    <Box bg="blue.300" minH="100vh" p={8}>
      <Box maxW="1000px" mx="auto" borderWidth="1px" borderRadius="md" bg="white" p={8}>
        
        {/* Back Button */}
        <Button onClick={onBack} colorScheme="blue" mb={6}>
          Back to Recipes
        </Button>

        {/* Recipe Title */}
        <Heading size="lg" textAlign="center">{recipe.label}</Heading>

        {/* Image */}
          <Image 
          src={recipe.image} 
          alt={recipe.label} 
          w="1000px" 
          h="350px" 
          objectFit="cover" 
          borderRadius="md" 
          mx="auto" />

        {/* Two-Column Layout */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="start">
          
          {/* Left Column: Recipe Details & Health Labels */}
          <VStack align="start" spacing={6}>
            
            {/* Recipe Det. */}
            <Heading size="md">Recipe Details</Heading>
            <SimpleGrid columns={2} spacing={4}>
              {recipeDetails.map((item, index) => (
                <React.Fragment key={index}>
                  <Text fontSize="md"><strong>{item.label}:</strong></Text>
                  <Text fontSize="md">{item.value}</Text>
                </React.Fragment>
              ))}
            </SimpleGrid>

            <Divider borderColor="gray.400" />

            {/*Health Labels (Apart) */}
            {healthLabels.length > 0 && (
              <>
                <Heading size="md">Health Labels</Heading>
                <SimpleGrid columns={2} spacing={2}>
                  {healthLabels.map((label, index) => (
                    <Badge key={index} colorScheme="green" p={2}>{label}</Badge>
                  ))}
                </SimpleGrid>
              </>
            )}
          </VStack>

          {/*Column rechts: Nutritional Info & Cautions */} 
          <VStack align="start" spacing={6}>

            {/* Nutritional Info */}
            <Heading size="md">Nutritional Info</Heading>
            <SimpleGrid columns={2} spacing={3}>
              {nutritionalInfo.map((item, index) => (
                <React.Fragment key={index}>
                  <Text fontSize="md"><strong>{item.label}:</strong></Text>
                  <Text fontSize="md">{item.value}</Text>
                </React.Fragment>
              ))}
            </SimpleGrid>

            <Divider borderColor="gray.400" />

            {/* (Sep. Section) */}
            {cautions.length > 0 && (
              <>
                <Heading size="md" color="red.500">Cautions</Heading>
                <SimpleGrid columns={3} spacing={2}>
                  {cautions.map((caution, index) => (
                    <Badge key={index} colorScheme="red" p={2}>{caution}</Badge>
                  ))}
                </SimpleGrid>
              </>
            )}
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
