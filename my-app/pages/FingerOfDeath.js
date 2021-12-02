import React from 'react';

import { Center, Stack, Heading, Image, Link, InputGroup, InputLeftAddon, Input } from "@chakra-ui/react"

const FingerOfDeath = () => {
    return (
        <div>
            <Center marginBottom="10">
                <Stack spacing="4">
                    <Link href="https://www.dndbeyond.com/spells/finger-of-death" color="red.500">https://www.dndbeyond.com/spells/finger-of-death</Link>
                    <InputGroup size="sm">
                        <InputLeftAddon children="Charges:" width="90px" />
                        <Input type="number" placeholder="3" />
                    </InputGroup>
                </Stack>
            </Center>
        </div>
    )
}
export default FingerOfDeath