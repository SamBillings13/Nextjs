import { useState } from "react";

const PAGE_SIZE = 10;

export default function Page({ jsonData }) {
  const [data, setData] = useState(jsonData.data); // Assuming your JSON structure has a 'data' property which is an array
  const [currentPage, setCurrentPage] = useState(1);



  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentData = data.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Render your data */}
      <ul>
        {currentData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Render pagination controls */}
      <div>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from API
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const jsonData = await response.json();
    console.log(jsonData);
    return {
      props: {
        jsonData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        jsonData: { data: [] }, // Return an empty array if there's an error
      },
    };
  }
}
