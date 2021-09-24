import { Button } from '@chakra-ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/components/NecklacePrayerBeads/NecklacePrayerBeads">
        <Button>Necklace of Prayer Beads</Button>
      </Link>
    </div>
  )
}