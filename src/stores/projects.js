import { ref } from 'vue'
import { defineStore } from 'pinia'

// Suas imagens
const imgPortfolio = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&h=900&auto=format&fit=crop'
const imgApi = 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&h=900&auto=format&fit=crop'


export const useProjectsStore = defineStore('projects', () => {
  const projects = ref([
    {
      id: 1,
      title: 'Este Portfólio',
      description: 'Onde a mágica (e o choro) acontece. Meu cantinho na web.', // Descrição curta
      imageUrl: imgPortfolio,
      repoUrl: 'https://github.com/guilhermesilvestree/guilhermesilvestree.github.io',
      liveUrl: null,
      dataLancamento: 'Outubro, 2025',
      tipo: 'real', // 'real' ou 'estudo'
      tags: ['Vue.js', 'Pinia', 'Vite', 'CSS', 'Glassmorphism'],
      descricaoLonga: `
Onde a mágica (e o choro) acontece. Um site pra mostrar o que eu sei, e o que eu *ainda* tô aprendendo. Feito com Vue.js e Pinia.

A ideia é ser meu cantinho na web, 100% feito por mim, do design (tosco) no Figma até o deploy.

### O que eu usei:
* Vue.js 3 (Composition API)
* Pinia para gerenciar o estado (projetos, músicas)
* Vue Router para as páginas
* CSS puro com variáveis e efeitos de glassmorphism
* ` + '`markdown-it`' + ` para renderizar isso aqui!
      `
    },
    {
      id: 2,
      title: 'API de Músicas',
      description: 'Um outdoor digital pro meu gosto musical impecável.', // Descrição curta
      imageUrl: imgApi,
      repoUrl: 'https://github.com/guilhermesilvestree',
      liveUrl: 'https://crm-clinica-sigma.vercel.app', // URL de exemplo
      dataLancamento: 'Novembro, 2025 (eu espero)',
      tipo: 'estudo',
      tags: ['Node.js', 'Express', 'API', 'Last.fm'],
      descricaoLonga: `
Uma API que diz o que eu tô ouvindo. Basicamente, um outdoor digital pro meu gosto musical impecável (e às vezes duvidoso).

Construí isso pra aprender a:
1.  Fazer uma API RESTful do zero com Node.js e Express.
2.  Consumir uma API de terceiros (Last.fm).
3.  Implementar um sistema de cache pra não ser banido do Last.fm.
4.  Servir os dados pro meu portfólio (esse mesmo que você tá vendo).
      `
    },
    {
      id: 3,
      title: 'API de Músicas',
      description: 'Um outdoor digital pro meu gosto musical impecável.', // Descrição curta
      imageUrl: imgApi,
      repoUrl: 'https://github.com/guilhermesilvestree',
      liveUrl: 'https://crm-clinica-sigma.vercel.app', // URL de exemplo
      dataLancamento: 'Novembro, 2025 (eu espero)',
      tipo: 'estudo',
      tags: ['Node.js', 'Express', 'API', 'Last.fm'],
      descricaoLonga: `
Uma API que diz o que eu tô ouvindo. Basicamente, um outdoor digital pro meu gosto musical impecável (e às vezes duvidoso).

Construí isso pra aprender a:
1.  Fazer uma API RESTful do zero com Node.js e Express.
2.  Consumir uma API de terceiros (Last.fm).
3.  Implementar um sistema de cache pra não ser banido do Last.fm.
4.  Servir os dados pro meu portfólio (esse mesmo que você tá vendo).
      `
    },
    {
      id: 4,
      title: 'API de Músicas',
      description: 'Um outdoor digital pro meu gosto musical impecável.', // Descrição curta
      imageUrl: imgApi,
      repoUrl: 'https://github.com/guilhermesilvestree',
      liveUrl: 'https://crm-clinica-sigma.vercel.app', // URL de exemplo
      dataLancamento: 'Novembro, 2025 (eu espero)',
      tipo: 'estudo',
      tags: ['Node.js', 'Express', 'API', 'Last.fm'],
      descricaoLonga: `
Uma API que diz o que eu tô ouvindo. Basicamente, um outdoor digital pro meu gosto musical impecável (e às vezes duvidoso).

Construí isso pra aprender a:
1.  Fazer uma API RESTful do zero com Node.js e Express.
2.  Consumir uma API de terceiros (Last.fm).
3.  Implementar um sistema de cache pra não ser banido do Last.fm.
4.  Servir os dados pro meu portfólio (esse mesmo que você tá vendo).
      `
    },
    {
      id: 4,
      title: 'API de Músicas',
      description: 'Um outdoor digital pro meu gosto musical impecável.', // Descrição curta
      imageUrl: imgApi,
      repoUrl: 'https://github.com/guilhermesilvestree',
      liveUrl: 'https://crm-clinica-sigma.vercel.app', // URL de exemplo
      dataLancamento: 'Novembro, 2025 (eu espero)',
      tipo: 'estudo',
      tags: ['Node.js', 'Express', 'API', 'Last.fm'],
      descricaoLonga: `
Uma API que diz o que eu tô ouvindo. Basicamente, um outdoor digital pro meu gosto musical impecável (e às vezes duvidoso).

Construí isso pra aprender a:
1.  Fazer uma API RESTful do zero com Node.js e Express.
2.  Consumir uma API de terceiros (Last.fm).
3.  Implementar um sistema de cache pra não ser banido do Last.fm.
4.  Servir os dados pro meu portfólio (esse mesmo que você tá vendo).
      `
    },
    {
      id: 4,
      title: 'API de Músicas',
      description: 'Um outdoor digital pro meu gosto musical impecável.', // Descrição curta
      imageUrl: imgApi,
      repoUrl: 'https://github.com/guilhermesilvestree',
      liveUrl: 'https://crm-clinica-sigma.vercel.app', // URL de exemplo
      dataLancamento: 'Novembro, 2025 (eu espero)',
      tipo: 'estudo',
      tags: ['Node.js', 'Express', 'API', 'Last.fm'],
      descricaoLonga: `
Uma API que diz o que eu tô ouvindo. Basicamente, um outdoor digital pro meu gosto musical impecável (e às vezes duvidoso).

Construí isso pra aprender a:
1.  Fazer uma API RESTful do zero com Node.js e Express.
2.  Consumir uma API de terceiros (Last.fm).
3.  Implementar um sistema de cache pra não ser banido do Last.fm.
4.  Servir os dados pro meu portfólio (esse mesmo que você tá vendo).
      `
    },
  ])

  return { projects }
})