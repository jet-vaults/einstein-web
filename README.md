# einstein-web

## Status

| | |
|---|---|
| **Domain** | `https://einstein-web.co.il` |
| **Pages URL** | `https://einstein-web.pages.dev` |
| **Storage mode** | `Standard` (`standard`) |
| **Storage account** | `jetvaults` |
| **Public storage** | `https://jetvaults.blob.core.windows.net/einstein-web/` |
| **Private storage** | `https://jetvaults.blob.core.windows.net/einstein-web-private/` |
| **Public container** | `einstein-web` |
| **Private container** | `einstein-web-private` |
| **Activated** | No |

## Nameservers

Set these at your domain registrar:

```
gordon.ns.cloudflare.com
sureena.ns.cloudflare.com
```

## Development

Edit files in `wwwroot/` and push to `main` - Cloudflare Pages auto-deploys.

Only the `wwwroot/` directory is served. Everything else stays in the repo.
