import React from 'react';

import { Center, Stack, Heading, Image, Link, InputGroup, InputLeftAddon, Input } from "@chakra-ui/react"

const PrayerBeads = () => {
    return (
        <div>
            <Center marginBottom="10">
                <Stack spacing="4">
                    <Heading>Necklace of Prayer Beads</Heading>
                    <Image boxSize="sm" class="prayer-beads-img" src="necklace_of_prayer_beads.jpeg" alt="Necklace of Prayer Beads" />
                    <Link href="https://www.dndbeyond.com/magic-items/necklace-of-prayer-beads" color="red.500">https://www.dndbeyond.com/magic-items/necklace-of-prayer-beads</Link>
                </Stack>
            </Center>
            <Center>
                <Stack spacing="4">
                    <InputGroup size="sm">
                        <InputLeftAddon children="curing:" width="90px" />
                        <Input type="number" placeholder="1" />
                    </InputGroup>
                    <InputGroup size="sm">
                        <InputLeftAddon children="blessing:" width="90px" />
                        <Input type="number" placeholder="1" />
                    </InputGroup>
                    <InputGroup size="sm">
                        <InputLeftAddon children="smiting:" width="90px" />
                        <Input type="number" placeholder="1" />
                    </InputGroup>
                    <InputGroup size="sm">
                        <InputLeftAddon children="favor:" width="90px" />
                        <Input type="number" placeholder="2" />
                    </InputGroup>
                    <InputGroup size="sm">
                        <InputLeftAddon children="summons:" width="90px" />
                        <Input type="number" placeholder="1" />
                    </InputGroup>
                </Stack>
            </Center>
        </div>
    )
}

export default PrayerBeads