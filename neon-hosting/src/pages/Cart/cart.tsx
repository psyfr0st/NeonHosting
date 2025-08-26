"use client";
import React from "react";

interface CartElementProps {
  services?: any[];
  selectedServices: any;
  setSelectedServices: (val: any) => void;
  CardElement: React.ReactNode;
}

const CartElement: React.FC<CartElementProps> = ({
  services = [],
  selectedServices,
  setSelectedServices,
  CardElement,
}) => {
  const handleSelect = (
    serviceId: string,
    option: any | null,
    service: any
  ) => {
    setSelectedServices((prev: any) => {
      const newState = { ...prev };

      const alreadySelected =
        newState[serviceId] &&
        (!option || newState[serviceId].name === option.name);

      // Se já estiver selecionado → remove
      if (alreadySelected) {
        delete newState[serviceId];
        return newState;
      }

      // Remove anteriores desse serviço
      Object.keys(newState).forEach((k) => {
        if (k.startsWith(serviceId)) delete newState[k];
      });

      // Se tiver opção, seleciona
      if (option) {
        newState[serviceId] = { ...option, serviceId };
      } else {
        // cards sem opções
        newState[serviceId] = {
          name: service.title,
          price: service.price,
          desc: service.desc,
          serviceId,
        };
      }

      return newState;
    });
  };

  return (
    <div className="min-w-[100dvw] min-h-[100dvh] text-white min-h-screen relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-[radial-gradient(circle_at_20%_50%,rgba(255,0,0,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,51,51,0.1)_0%,transparent_50%)] animate-[bgMove_20s_ease-in-out_infinite]"></div>
      <main className="container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {(services ?? []).map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              selectedServices={selectedServices}
              onSelect={handleSelect}
            />
          ))}
        </div>

        <div className="lg:col-span-1">{CardElement}</div>
      </main>
    </div>
  );
};

interface ServiceCardProps {
  service: any;
  selectedServices: any;
  onSelect: (serviceId: string, option: any | null, service: any) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  selectedServices,
  onSelect,
}) => {
  const selectedOption = selectedServices[service.id];
  const hasOptions =
    Array.isArray(service.options) && service.options.length > 0;

  return (
    <div
      className={`p-4 rounded-2xl border shadow-lg transition cursor-pointer
        ${
          selectedOption && !hasOptions
            ? "border-red-500 bg-red-900/30 shadow-red-500/50"
            : "border-red-600 shadow-red-500/20 hover:shadow-red-500/30"
        }
      `}
      onClick={() => {
        if (!hasOptions) onSelect(service.id, null, service);
      }}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center rounded-[15%] bg-red-900/30 p-2 border border-red-500 shadow-[0_0_10px_rgba(255,0,0,0.7),0_0_20px_rgba(255,0,0,0.5)]">
          {service.Icon}
        </div>
        <h3 className="text-xl font-bold text-red-500 drop-shadow-[0_0_10px_#ff0000]">
          {service.title}
        </h3>
      </div>

      <p className="text-gray-300 mb-3 mt-3">
        {selectedOption?.desc || service.desc}
      </p>

      {/* Preço direto se não tiver opções */}
      {!hasOptions && (
        <p
          className={`font-semibold ${
            selectedOption ? "text-white" : "text-gray-400"
          }`}
        >
          {service.price.toFixed(2)}€
        </p>
      )}

      {/* Opções */}
      {hasOptions && (
        <div className="flex flex-wrap gap-2 mt-2">
          {service.options.map((opt: any) => {
            const isSelected =
              selectedOption?.name === `${service.title}.${opt.name}`;
            return (
              <div
                key={opt.name}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(
                    service.id,
                    {
                      ...opt,
                      name: `${service.title}.${opt.name}`,
                      desc: opt.desc || service.desc,
                    },
                    null
                  );
                }}
                className={`px-4 py-2 rounded-lg border transition
        ${
          isSelected
            ? "bg-red-800 border-red-500 text-white shadow-lg shadow-red-500/50"
            : "bg-gray-900 border-red-700 text-gray-300 hover:bg-red-800 hover:text-white"
        }
      `}
              >
                <span className="font-medium">{opt.name}</span> —{" "}
                <span className="font-semibold">{opt.price.toFixed(2)}€</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CartElement;
