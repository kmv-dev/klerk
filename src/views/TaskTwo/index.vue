<template>
  <main class="py-12 flex flex-col items-center p-100 xl:container mx-auto px-0 sm:px-5">
    <a class="mb-6" href="https://www.klerk.ru/" target="_blank">
      <img src="../../assets/img/klerk.svg" alt="logo">
    </a>
    <nav class="mb-7">
      <ul class="flex">
        <li class="text-xs font-normal text-slate-400 tracking-wide" v-for="link in breadcrumbs" :key="link.id">
          <router-link :to="link.url" class="relative before:absolute before:w-full before:h-px before:bg-blue-200 before:bottom-0 hover:before:bg-blue-400">{{ link.name }}</router-link>
          <span v-if="!link.current" class="mx-2">→</span>
        </li>
      </ul>
    </nav>
    <h1 class="text-3xl font-bold tracking-wide mb-6 sm:text-5xl">Подписки «Клерка»</h1>
    <menu class="mb-7">
      <ul class="flex">
        <li
            v-for="( tab, i ) in tabs" :key="tab.id"
            class="text-sm font-normal text-slate-500 tracking-wide px-2 cursor-pointer sm:px-4 sm:text-base"
            @click="chengeActive(i)"
        >
          <span
            class="relative before:absolute pb-8"
            :class="{'before:w-full before:h-0.5 before:bg-blue-500 before:bottom-0 text-blue-500': isActive === i}"
          >
            {{ tab.name }}
          </span>
        </li>
      </ul>
    </menu>
    <section class="px-3 py-6 bg-slate-100 min-w-min max-w-5xl sm:rounded-xl sm:px-6">
      <header class="md:mx-7 mb-4">
        <h2 class="text-1xl font-bold tracking-wide mb-6 text-left md:text-center sm:text-2xl">Выберите рассылки, которые подходят именно вам</h2>
        <div class="relative mb-3">
          <input class="w-full pl-4 py-4 rounded-lg rounded-r-3xl" type="text" placeholder="Электронная почта">
          <button class="absolute right-0 bg-blue-600 h-full text-white px-5 rounded-full hover:bg-blue-700 sm:rounded-3xl">
            <span class="hidden sm:block">Подписаться</span>
            <span class="block sm:hidden icon-chevron_right"></span>
          </button>
        </div>
        <div class="flex items-center">
          <span
            @click="isSubscribe = !isSubscribe"
            :aria-checked="true"
            :class="isSubscribe ? 'bg-blue-600' : 'bg-gray-200'"
            class="relative mr-2 inline-block  h-3 w-7 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
            role="checkbox"
            tabindex="1"
          >
            <span
              aria-hidden="true"
              :class="isSubscribe ? 'translate-x-4' : 'translate-x-0'"
              class="absolute top-0 inline-block h-3 w-3 rounded-full bg-white shadow transform transition ease-in-out duration-200"
            ></span>
          </span>
          <span>Подписаться на все рассылки</span>
        </div>
      </header>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div
          v-for="card in cards" :key="card.id"
          class="px-3 py-3 bg-white rounded-lg relative sm:px-5 sm:py-6"
        >
          <img class="absolute w-10 top-4 right-5 sm:w-12 md:w-14 lg:w-20 sm:top-6" :src="card.img" alt="banner">
          <span class="text-xs text-slate-400">{{ card.rubric }}</span>
          <h3 class="font-bold mb-1">{{ card.title }}</h3>
          <p class="text-xs text-slate-500 w-full mb-3 sm:w-3/4">{{ card.description }}</p>
          <div class="flex mb-3" v-for="title in card.info" :key="title.subtitle">
            <img class="mr-3" src="../../assets/img/check.svg" alt="icon">
            <span class="text-xs font-bold">{{ title.subtitle }}</span>
          </div>
          <div class="flex items-center mt-7">
            <span
              @click="card.checked = !card.checked"
              :aria-checked="card.checked"
              :class="card.checked ? 'bg-blue-600' : 'bg-gray-200'"
              class="relative mr-2 inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
              role="checkbox"
              tabindex="0"
            >
              <span
                aria-hidden="true"
                :class="card.checked ? 'translate-x-5' : 'translate-x-0'"
                class="inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
              ></span>
            </span>
            <span class="text-xs font-medium">{{ card.subscribe }}</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      isSubscribe: false,
      isOn: false,
      isActive: 0,
      breadcrumbs: [
        {
          id: 1,
          name: 'Главная',
          url: '/task-2',
          current: false
        },
        {
          id: 2,
          name: 'Рассылки',
          url: '/task-2',
          current: false
        },
        {
          id: 3,
          name: 'Хлебные крошки',
          url: '/task-2',
          current: true
        }
      ],
      tabs: [
        {
          id: 1,
          name: 'Рассылки'
        },
        {
          id: 2,
          name: 'Соцсети'
        },
        {
          id: 3,
          name: 'Месенджеры'
        }
      ],
      cards: [
        {
          id: 1,
          rubric: 'Перед рассветом',
          title: 'Утренний бухгалтер',
          description: 'Самые важные новости и события за день. Кратко, по делу, структурировано.',
          info: [
            { subtitle: 'Новости для бухгалтеров, ИП и директора' },
            { subtitle: 'Подборка статей за день' }
          ],
          checked: true,
          subscribe: 'Уже получает 59 342 человек',
          img: '/src/assets/img/Frame-4.png'
        },
        {
          id: 2,
          rubric: 'После заката',
          title: 'Ночной бухгалтер',
          description: 'Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.',
          info: [
            { subtitle: 'Анализ, оценка и только самое главное' },
            { subtitle: 'Лучшие комменты юзеров в обзоре' }
          ],
          checked: false,
          subscribe: 'Уже получает 37 480 человек',
          img: '/src/assets/img/Frame-3.png'
        },
        {
          id: 3,
          rubric: 'Раз в две недели',
          title: 'Ножницы скидок',
          description: 'Подборка самых выгодных и полезных спецпредложений от надежных компаний.',
          info: [
            { subtitle: 'Акции и скидки от лидеров рынка' },
            { subtitle: 'Те, кто подписался – экономят много денег ' }
          ],
          checked: false,
          subscribe: 'Уже получает 92 118 человек',
          img: '/src/assets/img/Frame-2.png'
        },
        {
          id: 4,
          rubric: 'По мере появления анонсов',
          title: 'Чемодан вебинаров',
          description: 'Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов',
          info: [
            { subtitle: 'Никогда не пришлем платные вебинары' },
            { subtitle: 'Подборка топовых тем для вебинаров' }
          ],
          checked: false,
          subscribe: 'Уже получает 92 082 человек',
          img: '/src/assets/img/Frame-1.png'
        }
      ]
    }
  },
  methods: {
    chengeActive (i) {
      this.isActive = i
    }
  }
}
</script>
