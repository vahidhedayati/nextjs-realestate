import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs'
import SearchFilters from '../components/SearchFilters';
import Property from '../components/Property';
import noResult from '../assets/images/noresult.png'
import { baseUrl, fetchApi } from '../utils/fetchApi';

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex cursor="pointer" bg="gray.200" p="2" fontWeight="black"
        fontSize="lg" justifyContent="center" alignItems="center"
        onClick={() => setSearchFilters((previousFilter) => !previousFilter)}
      >

        <Text>Search by Filters</Text>.
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2x1" p="4" fontWeight="bold">
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {properties.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
      {properties.length === 0 && (
        <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5">
          <Image alt="nothing found" src={noResult} />
          <Text fontSize="2x1" marginTop="3">No results found !</Text>
        </Flex>
      )}
    </Box>
  )
}

export default Search;
//getStaticProps 
export async function getServerSideProps({ query }) {

  //  const propertiesForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  //  const propertiesForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0'
  const maxPrice = query.maxPrice || '1000000'
  const roomsMin = query.roomsMin || '0'
  const bathsMin = query.bathsMin || '0'
  const sort = query.sort || 'price-desc'
  const areaMax = query.areaMax || '34000'
  const locationExternalIDs = query.locationExternalIDs || '5002'
  const categoryExternalIDs = query.categoryExternalIDs || '4'

  const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&hitsPerPage=6&rentFrequency=${rentFrequency}&minPrice=${minPrice}&maxPrice=${maxPrice}&roomsMin=${roomsMin}&bathsMin=${bathsMin}&sort=${sort}`)
  return {
    props: {
      properties: data?.hits

    }
  }
}