## Product store frontend

Technologies: NextJS, React

The frontend is implemented using React and communicates with the backend via GraphQL

![image](https://user-images.githubusercontent.com/1272300/232078142-01eafcd5-78c9-4642-80dc-f267f6693699.png)


**Search page supports following feature:**
- Sorting: price, popularity
- Navigation to specific category
- Breadcrumbs with category path
- Filter by products name
- Filter by product attributes. Such as: brand, color, size. Attributes are loaded dynamically based on current category.
- Pagination implemented by "Load more" button

## How to run

```bash
npm run dev
```

## Configuration

Backend endpoints configuration

```bash
NEXT_PUBLIC_API_URL=http://localhost:4000
INTERNAL_API_URL=http://localhost:4000
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Backend

Backend repository https://github.com/kobylin/next-store-be