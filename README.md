# portfolio

## Overview

## How to build the environment

1. **Build images & Launch Containers**

    ```console
    cd portfolio

    docker compose up --build
    ```

2. **Check running containers**

    ```console
    docker ps --all

    NAMES
    portfolio-frontend-1
    portfolio-backend-1
    portfolio-pgadmin-1
    portfolio-mailhog-1
    portfolio-db-1
    ```

3. **Build the backend environment**

    ```console
    cd portfolio/backend

    pip install -r requirements.txt
    ```

4. **Build the frontend environment**

    ```console
    cd portfolio/frontend

    npm install
    ```

5. **Verify that localhost is accessible**

    | Server   | Port                                    |
    | :------- | :-------------------------------------- |
    | Frontend | [localhost:3000](http://localhost:3000) |
    | Backend  | [localhost:8000](http://localhost:8000) |
    | Mail     | [localhost:8025](http://localhost:8025) |
    | Database | [localhost:5050](http://localhost:5050) |

## Product architectures

### Frontend

---

The frontend is developed using the Next.js framework.  
The version information is below.

|            |        |
| :--------- | :----- |
| Next.js    | 14.2.7 |
| React      | 18.2.0 |
| TypeScript | 5.2.2  |

---

The directory structure is as follows.

|                  |                                      |
| :--------------- | :----------------------------------- |
| `node_modules`   | Project dependencies                 |
| `public`         | Static assets, initial settings      |
| `src/`           | Source code                          |
| ├── `app`        | Directory for routing and layouts    |
| ├── `components` | Reusable UI elements, common parts   |
| ├── `functions`  | Reusable functions, common processes |

---

- `app`

    Use AppRouter, which is recommended for Next.js Series 13 or later.  
    In the directory under app, place a folder with a name corresponding to each root,  
    and use `page.tsx` in that folder to control the actual browser display.

- `components`

    Stores elements that may be used throughout the system, such as buttons and 3d models.

- `functions`

    Stores functions that may be used system-wide, such as text display control.
