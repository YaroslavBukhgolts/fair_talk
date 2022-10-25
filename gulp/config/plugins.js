// Плагины
import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // обработка ошибок
import notify from "gulp-notify"; // сообщения подсказки
import browserSync from "browser-sync"; // локальный сервер
import newer from "gulp-newer"; // Проверка обновлений
import gulpIf from "gulp-if"; // Условное ветвление

// экспортируем обьект с плагинами
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
    if: gulpIf,
}