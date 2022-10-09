import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import { Cabecalho } from '../src/components/Cabecalho'
import { Lista } from '../src/components/Lista'

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      name: 'Professor 01',
      photo: 'https://github.com/IACarvalho.png',
      description: 'Descrição professor 01',
      value_of_hour: 100
    },
    {
      id: 2,
      name: 'Professor 02',
      photo: 'https://github.com/IACarvalho.png',
      description: 'Descrição professor 02',
      value_of_hour: 100
    },
    {
      id: 3,
      name: 'Professor 03',
      photo: 'https://github.com/IACarvalho.png',
      description: 'Descrição professor 03',
      value_of_hour: 100
    },
    {
      id: 4,
      name: 'Professor 04',
      photo: 'https://github.com/IACarvalho.png',
      description: 'Descrição professor 04',
      value_of_hour: 100
    },
  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main'}}>
      <Lista teachers={professores}></Lista>
    </Box>
  )
}

export default Home
