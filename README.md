# portfolio

## How to build the environment

1. **Build images & Launch Containers**

    ```console
    cd portfolio

    docker compose up --build
    ```

2. **Check running containers**

    ```console
    docker ps --all
    ```

3. **Build the backend vurtual environment**

    The following operations are performed so that the library can be recognized in the local environment.

    ```console
    cd portfolio/backend

    python3 -m venv .venv
    source .venv/bin/activate

    pip install -r requirements.txt
    ```

4. **Start the frontend environment**

    ```console
    cd portfolio/frontend

    npm run dev
    ```

5. **Verify that localhost is accessible**

    | Server   | Port                                    |
    | :------- | :-------------------------------------- |
    | Frontend | [localhost:3000](http://localhost:3000) |
    | Backend  | [localhost:8000](http://localhost:8000) |
    | Mail     | [localhost:8025](http://localhost:8025) |
    | Database | [localhost:5050](http://localhost:5050) |

## Architectures

### Frontend

The frontend is developed using the Next.js framework.  
Version information is below.

|            |        |
| :--------- | :----- |
| Next.js    | 14.2.5 |
| React      | 18.3.1 |
| TypeScript | 5.5.4  |

|                  |                                             |
| :--------------- | :------------------------------------------ |
| `node_modules`   | Project dependencies                        |
| `public`         | Static assets, initial settings             |
| `src/`           | Source code                                 |
| ├── `components` | Reusable UI elements, common parts          |
| ├── `features`   | Features by function, screen-specific logic |
| ├── `routes`     | Routingcon figuration for different screens |
| └── `utilities`  | Helper functions and utilities              |
