import React from 'react';

import { Center, Stack, Heading, Image, Link, InputGroup, InputLeftAddon, Input } from "@chakra-ui/react"

const PrayerBeads = () => {
    return (
        <div>
            <Center width="100%">
                <Stack spacing="4">
                    <Heading>Necklace of Prayer Beads</Heading>
                    <Image boxSize="sm" class="prayer-beads-img" src="necklace_of_prayer_beads.jpeg" alt="Necklace of Prayer Beads" />
                    <Link href="https://www.dndbeyond.com/magic-items/necklace-of-prayer-beads" color="red.500">https://www.dndbeyond.com/magic-items/necklace-of-prayer-beads</Link>
                    <InputGroup size="sm">
                        <InputLeftAddon children="curing:" />
                        <Input type="number" value="1" />
                    </InputGroup>
                    <InputGroup size="sm">
                        <InputLeftAddon children="blessing:" />
                        <Input type="number" value="1" />
                    </InputGroup>
                    <InputGroup size="sm">
                        <InputLeftAddon children="smiting:" />
                        <Input type="number" value="1" />
                    </InputGroup>
                    <InputGroup size="sm">
                        <InputLeftAddon children="favor:" />
                        <Input type="number" value="2" />
                    </InputGroup>
                    <InputGroup size="sm">
                        <InputLeftAddon children="summons:" />
                        <Input type="number" value="1" />
                    </InputGroup>
                </Stack>
            </Center>
        </div>
    )
}

export default PrayerBeads