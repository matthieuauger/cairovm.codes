import { useRouter } from 'next/router'

import { GITHUB_REPO_URL } from 'util/constants'

const useActions = () => {
  const router = useRouter()

  return [
    {
      id: 'opcodes',
      name: 'Opcodes',
      shortcut: ['o'],
      keywords: 'home opcodes back',
      section: 'Navigation',
      perform: () => router.push('/'),
      subtitle: 'Opcodes reference',
    },
    {
      id: 'precompiled',
      name: 'Precompiled',
      shortcut: ['a'],
      keywords: 'precompiled contracts',
      section: 'Navigation',
      subtitle: 'Precompiled contracts reference',
      perform: () => router.push('/precompiled'),
    },
    {
      id: 'playground',
      name: 'Playground',
      shortcut: ['p'],
      keywords: 'editor play',
      section: 'Navigation',
      perform: () => router.push('/playground'),
      subtitle: 'Play with EVM in real-time',
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['a'],
      keywords: 'about EVM',
      section: 'Navigation',
      subtitle: 'About EVM and its internals',
      perform: () => router.push('/about'),
    },
    {
      id: 'github',
      name: 'GitHub',
      shortcut: ['g'],
      keywords: 'contribute GitHub issues',
      section: 'Navigation',
      subtitle: 'Contribute on GitHub',
      perform: () => window.open(GITHUB_REPO_URL, '_blank'),
    },
  ]
}

export default useActions
