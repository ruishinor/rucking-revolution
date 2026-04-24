# Maintenance Mode Toggle

The maintenance page lives at `public/maintenance.html`.

## To enable maintenance mode

Add these two rules as the **last two items** in the `redirects` array in `vercel.json`, then redeploy.
Order matters: the passthrough rule must come before the catch-all or it will loop.

```json
{ "source": "/maintenance.html", "destination": "/maintenance.html", "statusCode": 200 },
{ "source": "/(.*)", "destination": "/maintenance.html", "permanent": false }
```

## To disable maintenance mode

Remove those two rules from `redirects` in `vercel.json` and redeploy.
