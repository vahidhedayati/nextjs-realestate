import { useEffect, useState } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import router, { userRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import { filterData, getFilterValues } from '../utils/filterData'

const searchFilters = () => {
  const [filters, setFilters] = useState(filterData);

  const searchProperties = (filterValues) => {
    //console.log(JSON.stringify(filterValues) + ' fv');
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);

    values?.forEach((item) => {
      query[item.name] = item.value
    })

    router.push({ pathname: path, query })

  }
  return (
    <div>
      SearchFilters
      <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
        {filters.map((filter) => (
          <Box key={filter.queryName}>

            <Select
              placeholder={filter.placeholder}
              w="fit-content"
              p="3"
              onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}>

              {filter?.items?.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              ))}
            </Select>

          </Box>
        ))}
      </Flex>
    </div>
  )
}

export default searchFilters;