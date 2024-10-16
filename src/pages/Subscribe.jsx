import { Card, CardHeader, CardBody, CardFooter,Text,Input } from '@chakra-ui/react'
const Subscribe =()=>{
    return(
        <>
        <Card>
            <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
                <Input placeholder='Name' />
            </CardBody>
        </Card>
        </>

    );
}
export default Subscribe;