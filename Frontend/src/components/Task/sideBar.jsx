import React from 'react'
import { BellIcon } from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  extendTheme,
} from '@chakra-ui/react'
import {

  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,

  Text,
  useDisclosure,

  Image,
  Button

} from '@chakra-ui/react';
import {

  FiFolderMinus,
  FiLogOut,
  FiUser,


} from 'react-icons/fi';
import { CgInsights } from "react-icons/cg"
import { SiMicrosoftteams } from "react-icons/si"
import {
  TbReportSearch
} from "react-icons/tb"

import { FaTag, FaQuestion, FaUserTie } from "react-icons/fa";

import { FaStopwatch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Sidebar = ({ children }) => {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();
const data=useSelector((state) => state.AppReducer.client)
console.log(data)
  return (
    <div style={{ border: "1px solid black" }}>
      <Box
        bg={useColorModeValue('#2c1338')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w="190px"
        pos="fixed"
        h="full"
      >
        <Flex mt='6' onClick={()=>navigate('/')}>
          <Image margin="auto" h="20px" w="60%" src="https://assets.website-files.com/5f699d08507c7daf18b16e6a/61235a16de9b7eb783fe6b73_toggl-track_.png" />
          <Box w='20%'>
          <BellIcon fontSize={"xl"} color="white" />
          </Box>
        </Flex>

        {/* Timer */}
        <Box marginTop="10px" >
          <Flex h="10px" alignItems="center" mx="2" justifyContent="space-between">
            <Text fontSize="12px" color="#777088" fontWeight="bold" >
              TRACK
            </Text>
            <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
          </Flex>

          <Flex onClick={() => navigate("/timer")}
            align="center"
            p="1"
            mx="2"
            mt="5px"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
              bg: 'grey',
              color: 'white',
            }}
          >
            {(
              <Icon
                mr="4"
                fontSize="20px"
                padding="auto"
                color="white"
                _groupHover={{
                  color: 'white',
                }}
                as={FaStopwatch}
              />
            )}
            <Text color="white" fontSize="13px" >Timer</Text>
          </Flex>


          {/* anaylyze */}
        </Box >
        <Box marginTop={"10px"}>
          <Flex h="10px" alignItems="center" mx="2" justifyContent="space-between">
            <Text fontSize="12px" color="#777088" fontWeight="bold">
              ANAYLZE
            </Text>
            {/* <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} /> */}
          </Flex>
          <Flex 
          
            align="center"
            p="1"
            mx="2"
            mt="5px"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
              bg: 'grey',
              color: 'white',
            }}
          >
            {(
              <Icon
                mr="4"
                fontSize="20px"
                padding="auto"
                color="white"
                _groupHover={{
                  color: 'white',
                }}
                as={TbReportSearch}
              />
            )}
            <Text color="white" fontSize="13px">Reports</Text>
          </Flex>
          <Flex
            align="center"
            p="1"
            mx="2"
            mt="5px"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
              bg: 'grey',
              color: 'white',
            }}
          >
            {(
              <Icon
                mr="4"
                fontSize="20px"
                padding="auto"
                color="white"
                _groupHover={{
                  color: 'white',
                }}
                as={CgInsights}
              />
            )}
            <Text color="white" fontSize="13px">Insights</Text>
          </Flex>

        </Box>

        <Box marginTop={"10px"}>
          <Flex h="10px" alignItems="center" mx="2" justifyContent="space-between">
            <Text fontSize="12px" color="#777088" fontWeight="bold">
              MANAGE
            </Text>
            <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
          </Flex>

          <>
            {/* //project */}


            <Flex onClick={() => navigate("/project")}
              align="center"
              p="1"
              mx="2"
              mt="5px"
              borderRadius="lg"
              role="group"
              cursor="pointer"
              _hover={{
                bg: 'grey',
                color: 'white',
              }}
            >
              {(
                <Icon
                  mr="4"
                  fontSize="20px"
                  padding="auto"
                  color="white"
                  _groupHover={{
                    color: 'white',
                  }}
                  as={FiFolderMinus}
                />
              )}
              <Text color="white" fontSize="13px">Project</Text>
            </Flex>

          </>
          {/* {name:"Client",icon:FiUser},
    {name:"Team",icon:FaUserFriends},
    {name:"Tag",icon:FaTag},
    {name:"Help",icon:FaQuestion} */}


          <>

            <Flex onClick={() => navigate("/client")}
              align="center"
              p="1"
              mx="2"
              mt="5px"
              borderRadius="lg"
              role="group"
              cursor="pointer"
              _hover={{
                bg: 'grey',
                color: 'white',
              }}
            >
              {(
                <Icon
                  mr="4"
                  fontSize="20px"
                  padding="auto"
                  color="white"
                  _groupHover={{
                    color: 'white',
                  }}
                  as={FiUser}
                />
              )}
              <Text color="white" fontSize="13px" >Client</Text>
            </Flex>

          </>
          <>
            <Flex
              align="center"
              p="1"
              mx="2"
              mt="5px"
              borderRadius="lg"
              role="group"
              cursor="pointer"
              _hover={{
                bg: 'grey',
                color: 'white',
              }}
            >
              {(
                <Icon
                  mr="4"
                  fontSize="20px"
                  padding="auto"
                  color="white"
                  _groupHover={{
                    color: 'white',
                  }}
                  as={FaTag}
                />
              )}
              <Text color="white" fontSize="13px">Tag</Text>
            </Flex>

          </>
          <>
            <Flex
              align="center"
              p="1"
              mx="2"
              mt="5px"
              borderRadius="lg"
              role="group"
              cursor="pointer"
              _hover={{
                bg: 'grey',
                color: 'white',
              }}
            >
              {(
                <Icon
                  mr="4"
                  fontSize="20px"
                  padding="auto"
                  color="white"
                  _groupHover={{
                    color: 'white',
                  }}
                  as={SiMicrosoftteams}
                />
              )}
              <Text color="white" fontSize="13px">Team</Text>
            </Flex>

          </>
          <>
            <Flex
              align="center"
              p="1"
              mx="2"
              mt="5px"
              borderRadius="lg"
              role="group"
              cursor="pointer"
              _hover={{
                bg: 'grey',
                color: 'white',
              }}
            >
              {(
                <Icon
                  mr="4"
                  fontSize="20px"
                  padding="auto"
                  color="white"
                  _groupHover={{
                    color: 'white',
                  }}
                  as={FaQuestion}
                />
              )}
              <Text color="white" fontSize="13px">Help</Text>
            </Flex>
          </>
          <Box marginTop="30px" marginBottom="30px" marginLeft="20px" bg='Grey 200'
            color='white'>
            <Text fontSize="14px" color="white" w="120px" fontWeight="bold">Trial:30 Days Left</Text>
            <Text textDecoration="underline" fontSize="14px" color="white" w="120px" fontWeight="bold" marginRight="100px">Upgrade Today</Text>
          </Box>
          <Box fontSize="13px" color="white" marginLeft="20px" w="120px" bg="RGBA(0, 0, 0, 0.04)" >Resume Onboarding</Box>
        </Box>
        <Flex
          marginTop="12px"
          borderRadius="lg"
          direction="column"
          role="group"
          cursor="pointer">
          <Text fontSize="14px" color="#777088" fontWeight="bold" marginRight="100px">
            WorkSpace
          </Text>

        </Flex>
        {/* <Button marginTop="15px" color="Red"><FiLogOut/>Logout</Button> */}
        // Log out pop up
        <Pop />

      </Box>


    </div>
  )
}

function Pop() {
  const navigate=useNavigate()
  const email=localStorage.getItem('userEmail')

  const handleCLick=()=>{
    localStorage.removeItem('userEmail')
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box h="60px" w="90%" margin="auto" mt="25px" paddingTop="15px" marginTop="12px" border="2px solid grey"
          borderRadius="10px" _hover={{ bg: 'grey', color: 'white' }}>
          <Flex justify={"center"}>
            <FaUserTie color="white" fontSize="20px" />
            <Text mt="1" ml='2' color="white" >{email}</Text></Flex>
        </Box>
      </PopoverTrigger>
      <PopoverContent w='14em'>
        <PopoverArrow />
        <PopoverBody>
          <Flex direction={"column"}>
            <Text mt="4" mb="4" fontWeight={"bold"} >Email : {email}</Text>
            <Button p="4" mb="2" size={"xs"} onClick={handleCLick}>Log Out</Button>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>)
}


export default Sidebar
