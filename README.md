# Базовая сборка для разработки SPA на React, Redux
>Сборка основывается на [React Create App](https://github.com/facebook/create-react-app). Для более удобного старта разработки в сборку были добавлены инструменты, которые хорошо себя зарекомендовали на реальных проектах. 
## Начало работы
* `npm i`
* `npm run start`
## Файловая структура
````
build/           # собранный проект
public/          # шаблон для проекта
src/             # исходные файлы проекта
  api/           # инструменты для взаимодействия с API
  components/    # react компоненты
  config/        # конфигурационные файлы
  containers/    # react компоненты подключенные к redux
  models/        # модели данных
  redux/         # redux файлы
    middleware/  # redux middleware
    modules/     # redux модуль включает в себя Constants, Actions, Reducer
  utils/         # инструмент с полезными функциями, например проверка на пустоту массива
````
## Основные команды
* `npm run start` -- поднимает локальный сервер и собирает проект в режиме разработки 
* `npm run build` -- собирает проект в папку build
* `npm run test` -- запуск тестов
* `npm run eject` -- извлекает конфигурационные файлы сборки [React Create App](https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-eject) (процесс не обратим)
