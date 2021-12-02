import { Button } from '@chakra-ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/NecklacePrayerBeads">
        <Button>Necklace of Prayer Beads</Button>
      </Link>
      <br />
      <Link href="/FingerOfDeath">
        <Button>Finger of Death</Button>
      </Link>
    </div>
  )
}
