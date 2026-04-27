# Route Inventory

## Frontend Routes

All frontend routes are defined in `src/App.tsx`.

### Public Routes
| Route | Component | Description | Example URLs |
|-------|-----------|-------------|--------------|
| `/` | Landing | Landing page with app overview | `https://app.com/` |

### Billing Routes
| Route | Component | Description | Example URLs |
|-------|-----------|-------------|--------------|
| `/success` | Success | Subscription success confirmation | `https://app.com/success?sessionId=cs_123` |
| `/cancel` | Cancel | Subscription cancellation page | `https://app.com/cancel` |

### Error Routes
| Route | Component | Description |
|-------|-----------|-------------|
| `*` (catch-all) | NotFound | 404 page for unmatched routes |

### Query Parameters
- `sessionId` - Checkout session ID (used in `/success?sessionId=...`)

## Route Guarding

Current route set is public and does not require auth guards.
