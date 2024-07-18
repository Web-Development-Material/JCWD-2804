"use client";
import { useEffect, useState } from "react";
import { fetchEntries } from "@/api/cms";
import { useRouter } from "next/navigation";
import Cookie from "js-cookie";

type Entry = {
  sys: {
    id: string;
  };
  fields: {
    internalName: string;
    pageName: string;
    slug: string;
  };
};

const CmsPage = () => {
  const router = useRouter();
  const [entries, setEntries] = useState<Entry[]>([]);

  const fetchData = async () => {
    const data = await fetchEntries();
    const newEntries = data?.items?.map((item: any) => {
      return {
        sys: item?.sys,
        fields: item?.fields,
      };
    });
    setEntries(newEntries);
  };

  useEffect(() => {
    const token = Cookie.get("token");
    if (!token) {
      router.push("/login");
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contentful Entries</h1>
      <ul>
        {entries?.map((entry) => (
          <li key={entry.sys.id} className="mb-4 p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold">{entry?.fields.pageName}</h2>
            <p>Slug: {entry?.fields?.slug}</p>
            <p>Internal Name: {entry?.fields?.internalName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CmsPage;
