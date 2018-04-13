export const SOMETHING_BROKE = 'Упс, кажется что-то поломалось :('

export const DATE_CANNOT_BE_PARSED = 'Я не понимаю когда, пожалуйста проверьте правильность дат.'

export const PROCESSING = 'Обрабатываю запрос'

export const DAY_IS_FREE = 'День свободен 🎉'

export const CONFLICT = 'На это время уже кто-то записан, вот расписание на этот день: \n'

export const UNAUTHORIZED = 'Вы неавторизированы, пожалуйста добавьте ключ авторизации (его можно получить у ответственного брата) с помощью команды Мой ключ'

export const KEY_AUTHORIZED = 'Вы авторизированы, теперь вы можете пользоваться ботом 🎉'

export const KEY_INVALID = 'Вы ввели недействительный ключ ключ, проверьте правильность ввода'

export const ADDED_SUCCESSFULLY = (date: string) => `Вы успешно записаны на ${date}`

export const HELP = (botName: string, userName: string) => `Привет ${userName}, я бот и меня зовут ${botName} 😀 Я помогаю в работе с календарем и даже могу записывать на стенд!

От тебя мне нужна малость: ключ календаря TeamUp и ясные формулировки.

Вот список команд, которые я понимаю:
- Мой ключ "ключ" - Зарегестрировать ваш ключ
- Кто записан "дата" - Посмотреть расписание на указанный день
- Запиши меня "дата" с "время начала" до "время окончания" - записаться на стенд Саржин Яр

Форматы даты и времени:
- Любую дату можно написать в формате 21.05 и 21 05, а также словами "сегодня", "завтра" и т.д.
- Время в формате 09:00, 15:30.

Чтобы связаться с братьями, ответственными за стенд напишите сюда слово "контакты"`

export const CONTACTS = `
Стенд "Саржин Яр"
+380 63 84 87 087
Максим Жемеренко

Стенд "Гостиница Мир"
+380 63 262 5621
+380 50 618 2544
+380 97 409 8405
Саша Миронюк

Стенд "Тобольская"
+380 50 677 0324
+380 63 047 6122
Саша Гармаш`

export const IM = (botName: string) => `Меня зовут ${botName} 😋`

export const UNKNOWN = `К сожалению, я вас не понял 😢 Напиши "Помощь", для получения дополнительной информации.`
