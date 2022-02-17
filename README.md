
## Задание на FrontEnd (Zennolab)
Что нужно сделать?
Мы разрабатываем личный кабинет для клиентов ZennoLab. В нем клиенты смогут скачивать
продукты компании, получать доступ к купленным сервисам и настраивать свой профиль. В
тестовом задании необходимо реализовать просмотр и настройку профиля клиента. В него
входят:
- Личные данные
- Платежные данные
- Доступ к сервису (Фильтрация по IP)
- Id клиента
  
  **Особенности реализации**
1. Необходимо получить доступ к репозиторию (прислать нам свой email)
2. Для разработки нужно клонировать бранч с именем UA2-53
3. Для эмулятора backend части можно использовать openapi-generator (или любой другой, цель запустить REST Server), вот пример запуска
   эмулятора на Node.js (там же есть примеры для других платформ).
4. Все должно работать по стандартному Flow: Api -> State (Business Logic) -> Component
   (View) (Базовые примеры работы реализованы)
5. Взаимодействие с API через REST (документация Swagger)(Content-Type: JSON)
   Спецификация API.
6. Базовый каркас приложения React/Typescript/Axios/Mobx(6)/styled-component
7. Для компонентов надо использовать библиотеку AntD.
8. Основной каркас применить согласно базовому макету. Реализовать навигацию - пункты
   Профиль и Dashboard. При входе на портал пользователь попадает на главную
   Dashboard, далее через навигацию может посмотреть свой профиль.
9. Долгие операции надо реализовать с прелоадером, можно как компонент (отображение и
   затухание через глобальный стор), либо через интерцептор Axios.
   Файлы для разработки - [Files](https://drive.google.com/drive/folders/1e-ubcW9X7Mlu6ydLo_TNcpBtMR-cOgCy?usp=sharing)
