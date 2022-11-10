import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { User } from 'firebase/auth';
import { TiHome } from 'react-icons/ti';
import { VscAccount } from 'react-icons/vsc';
import { IoSparkles } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineLogin } from 'react-icons/md';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Icon, Flex, Text } from '@chakra-ui/react';
import { auth } from '../../../firebase/clientApp';
import { signOut } from 'firebase/auth';
import { useSetRecoilState } from 'recoil'; 
import { authModalState } from '../../../atoms/authModalAtom';




const Directory:React.FC = () => {


    return (
        <Menu>
            <MenuButton cursor="pointer" padding="0px 6px"
            borderRadius={4} 
            _hover={{ outline: "1px solid", outlineColor: "gray"}}
            mr={2}
            ml={{ base: 0, md: 2}}>
                <Flex align="center" justify="space-between" width={{base: 'auto', lg: '100px'}}>
                    <Flex align="center">
                        <Icon fontSize={24} mr={{ base: 1, md: 2}} as={TiHome} />
                        <Flex display={{ base: "none", lg: "flex"}}>
                            <Text fontWeight={600} fontSize="10pt">Home</Text>
                        </Flex>
                    </Flex>
                <ChevronDownIcon />
                </Flex>
            </MenuButton>
            <MenuList color="#5596E6"
            mt={4}
            bg="linear-gradient(145deg, #1c1d1f, #17181a)"
            boxShadow="5px 5px 13px #121214, -5px -5px 13px #222426"
            border="none">
            
                
            </MenuList>
        </Menu>
    )
}
export default Directory;