# MACS booking service

Self-hosted Easy!Appointments service for the MACS website.

## Public route

Website CTA:

`/apply` → `/book` → `https://book.macsdigitalmedia.com`

The Next.js booking redirect can be overridden with `BOOKING_URL` or `NEXT_PUBLIC_BOOKING_URL`.

## Server layout

Recommended server path:

`/opt/macs-booking`

The container binds only to loopback:

`127.0.0.1:8035 -> booking:80`

Host Caddy remains the only public listener on ports 80/443.

Example Caddy route:

```caddy
book.macsdigitalmedia.com {
    reverse_proxy 127.0.0.1:8035
}
```

## Deployment

1. Copy `docker-compose.yml` and a private `.env` to the server.
2. Replace all database passwords with strong secrets.
3. Set `BASE_URL=https://book.macsdigitalmedia.com`.
4. Add the Caddy route and DNS record for `book.macsdigitalmedia.com`.
5. Run `docker compose up -d`.
6. Complete the Easy!Appointments install screen.
7. Create one service: MACS conversation.
8. Create the MACS provider account.

## Google Calendar sync

Easy!Appointments requires Google OAuth credentials for Calendar sync.

In Google Cloud:

- Enable the Google Calendar API.
- Create a Web Application OAuth client.
- Authorized JavaScript origin: `https://book.macsdigitalmedia.com`
- Authorized redirect URI: use the callback path shown by the installed Easy!Appointments version.
- Put the client ID and secret in the private server `.env`.
- Restart the booking container.
- In Easy!Appointments, enable Google sync for the MACS provider and sign in as `macsdigitalmedia@gmail.com`.

Never commit the OAuth client secret, database passwords, or provider credentials.
