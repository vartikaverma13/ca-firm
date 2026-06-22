"use client";

import Link from "next/link";
import { useUiStore } from "@/store/uiStore";

export function ServiceSelector({ services }: { services: { title: string; slug: string }[] }) {
  const { activeService, setActiveService } = useUiStore();

  return (
    <div className="service-tabs">
      {services.map((service) => (
        <Link
          className={activeService === service.slug ? "active-tab" : ""}
          href={`/services/${service.slug}`}
          key={service.slug}
          onMouseEnter={() => setActiveService(service.slug)}
        >
          {service.title}
        </Link>
      ))}
    </div>
  );
}
