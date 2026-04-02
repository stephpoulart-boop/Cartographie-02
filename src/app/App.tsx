import { useState } from "react";
import { ProcessOverview } from "./components/ProcessOverview";
import { StepDetails } from "./components/StepDetails";
import { ServiceCoordination } from "./components/ServiceCoordination";
import { FileText, ArrowLeft } from "lucide-react";

export type ViewMode = "overview" | "step" | "services";

export interface StepData {
  id: string;
  title: string;
  description: string;
  substeps?: Array<{
    title: string;
    content: string;
  }>;
}

export const getStepColor = (id: string) => {
  switch (id) {
    case "classification":
      return "from-blue-500 to-blue-600";
    case "reception":
      return "from-green-500 to-green-600";
    case "diagnostic":
      return "from-orange-500 to-orange-600";
    case "solution":
      return "from-purple-500 to-purple-600";
    case "suivi":
      return "from-pink-500 to-pink-600";
    case "reglementaire":
      return "from-indigo-500 to-indigo-600";
    default:
      return "from-gray-500 to-gray-600";
  }
};

export const getStepColorClass = (id: string) => {
  switch (id) {
    case "classification":
      return { bg: "bg-blue-100", text: "text-blue-600", button: "bg-blue-600", border: "border-blue-200" };
    case "reception":
      return { bg: "bg-green-100", text: "text-green-600", button: "bg-green-600", border: "border-green-200" };
    case "diagnostic":
      return { bg: "bg-orange-100", text: "text-orange-600", button: "bg-orange-600", border: "border-orange-200" };
    case "solution":
      return { bg: "bg-purple-100", text: "text-purple-600", button: "bg-purple-600", border: "border-purple-200" };
    case "suivi":
      return { bg: "bg-pink-100", text: "text-pink-600", button: "bg-pink-600", border: "border-pink-200" };
    case "reglementaire":
      return { bg: "bg-indigo-100", text: "text-indigo-600", button: "bg-indigo-600", border: "border-indigo-200" };
    default:
      return { bg: "bg-gray-100", text: "text-gray-600", button: "bg-gray-600", border: "border-gray-200" };
  }
};

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("overview");
  const [selectedStep, setSelectedStep] = useState<StepData | null>(null);

  const handleStepClick = (step: StepData) => {
    setSelectedStep(step);
    setViewMode("step");
  };

  const handleServicesClick = () => {
    setViewMode("services");
  };

  const handleBackToOverview = () => {
    setViewMode("overview");
    setSelectedStep(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 rounded-lg p-2">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Cartographie - Résolution de Litige Client
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Processus de gestion d'un produit endommagé
              </p>
            </div>
          </div>
          
          {viewMode !== "overview" && (
            <button
              onClick={handleBackToOverview}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à la vue d'ensemble
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {viewMode === "overview" && (
          <ProcessOverview
            onStepClick={handleStepClick}
            onServicesClick={handleServicesClick}
          />
        )}
        
        {viewMode === "step" && selectedStep && (
          <StepDetails step={selectedStep} />
        )}
        
        {viewMode === "services" && <ServiceCoordination />}
      </main>
    </div>
  );
}

export default App;