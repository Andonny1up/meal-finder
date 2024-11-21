import { Button, Card, CardBody, CardFooter, Heading, Image, Text } from '@chakra-ui/react'
import { Meal } from '../types'

type Props = {
  meal: Meal;
  openRecipe: () => void;
}

const MealCard = ({meal: m, openRecipe}: Props) => {
  return (
    <Card boxShadow="lg">
      <CardBody>
        <Image
          src={m.strMealThumb}
          alt={m.strMeal}
          borderRadius='lg'
        />
        <Heading size='md' color="blue.400" >
          <Text mt="4">{m.strMeal}</Text>
        </Heading> 
      </CardBody>
      <CardFooter pt="0">
          <Button onClick={openRecipe} color="white" bgColor="blue.400">
            Ver Receta
          </Button>
        </CardFooter>
    </Card>
  )
}

export default MealCard