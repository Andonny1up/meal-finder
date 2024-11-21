import { Meal } from '../types'
import { Button, Card, CardBody, CardFooter, Heading, Image, SimpleGrid, Text} from '@chakra-ui/react';
import MealCard from './MealCard';
import SkeletonCard from './SkeletonCard';

type Props = {
  meals: Meal[];
  loading: boolean;
  openRecipe: (meal: Meal) => void;
}

const MainContent = ({meals, loading, openRecipe}: Props) => {
  console.log(meals, loading);
  const skeletons =[1,2,3,4,5,6.7,8];

  return (

    <SimpleGrid columns={[2, null, 3]} spacing='20px'>
     {loading && skeletons.map(skeleton =><SkeletonCard key={skeleton}/>)}
     { !loading && meals.map(m =>(
        <MealCard openRecipe={() => openRecipe(m)} key={m.idMeal} meal={m}/>
      ))}
    </SimpleGrid>
    
  )
}

export default MainContent