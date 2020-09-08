# Dashboard

  - `/`
    - statystyki dzisiejszych zamówień
    - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Widok dostępności stolików

  - `/tables`
    - wybór daty i godziny
    - tabela z listą wydarzeń i rezerwacji
      - każda kolumna = stolik, każdy wiersz = blok 30 min
      - Stylowane na podstawie widoku tygodnia w kalendarzu Google
      - po kliknięciu rezerwacji lub eventu przechodzimy na stronę szczegółów

  - `/tables/booking/:id`
    - zawiera inforamację dotyczące rezerwacji
    - umożliwia edycję i zapisanie zmian

  - `/tables/booking/new`
    - umiżliwia wybranie danych rezerwacji

  - `/tables/events/:id`
    - zawiera inforamację dotyczące wydarzenia
    - umożliwia edycję i zapisanie zmian
    
  - `/tables/events/new`
    - umiżliwia wybranie danych wydarzenia

# Widok kelnera

  - `/waiter`
    - tabela zamówień
      - wiersze = stoliki, kolumny = różne rodzaje informacji (status, czas od ostatniej aktywności)
      - dostępne akcję dla danego stolika

  - `/waiter/order/new`
    - numer stolika (edytowalny)
    - meny produktów
    - opcję wybranego produktu
    - zamówione produkty z opcjami i ceną
    - kwota do zapłaty

  - `/waiter/order/:id`
    - numer stolika (edytowalny)
    - meny produktów
    - opcję wybranego produktu
    - zamówione produkty z opcjami i ceną
    - kwota do zapłaty

# Widok kuchni

  - `/kitchen`
    - wyświetlanie listy zamówień w kolejności ich złożenia
    - lista musi zawierać numer stolika lub zamówienia zdalnego oraz pełne informacje dotyczące zamówienia
    - za liście musi być dostępna zmiana statusu zamówiania na zrealizowane

# Podstrona logowania

  - `/login`
    - pola na login i hasło
    - guzik do zalogowania (link do dashboardu)