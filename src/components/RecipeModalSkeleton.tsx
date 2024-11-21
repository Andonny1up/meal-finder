import { Container, SkeletonText } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const RecipeModalSkeleton = (props: Props) => {
  return (
    <Container>
        <SkeletonText mt="4" mb="5" noOfLines={1} skeletonHeight={8}/>
        <SkeletonText borderRadius={200} noOfLines={1} skeletonHeight={280}/>
        <SkeletonText mt="4" spacing={4} noOfLines={5}/>
    </Container>
  )
}

export default RecipeModalSkeleton