import { useEffect, useState } from 'react';
import { Flex, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { userRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

const searchFilters = () => {
  const { filters, setFilters } = useState({});

  return (
    <div>
      SearchFilters
      <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">

      </Flex>
    </div>
  )
}

export default searchFilters;