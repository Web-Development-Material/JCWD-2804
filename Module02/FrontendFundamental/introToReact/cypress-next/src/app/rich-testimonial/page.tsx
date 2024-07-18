"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const RichTestimonial = () => {
  const [detail, setDetail] = useState<any>(null);

  useEffect(() => {
    axios
      .get(
        "https://cdn.contentful.com/spaces/ipzb87vgy2fw/environments/master/entries/2fh7DboJhjWwcRmWfZnC5R?access_token=hkpho6Q9WsCsVAlLChpE-PtXNkoEjZdGYgYBdKd1QNA"
      )
      .then((response: any) => {
        setDetail(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, []);

  const quoteText =
    detail?.fields?.quote?.content?.[0]?.content?.[0]?.content?.[0]?.value ||
    "";

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col space-y-3">
        <h1>{detail?.fields?.internalName}</h1>
        <p>{quoteText}</p>
      </div>
    </main>
  );
};

export default RichTestimonial;
