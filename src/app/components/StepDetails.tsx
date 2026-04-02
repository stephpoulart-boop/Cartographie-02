import { CheckCircle, ArrowRight } from "lucide-react";
import { StepData, getStepColorClass } from "../App";

interface StepDetailsProps {
  step: StepData;
}

export function StepDetails({ step }: StepDetailsProps) {
  const colors = getStepColorClass(step.id);

  return (
    <div className="space-y-6">
      {/* Step Header */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <div className="flex items-start gap-4">
          <div className={`${colors.bg} rounded-xl p-3`}>
            <CheckCircle className={`w-10 h-10 ${colors.text}`} />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">{step.title}</h1>
            <p className="text-lg text-gray-600">{step.description}</p>
          </div>
        </div>
      </div>

      {/* Substeps */}
      {step.substeps && step.substeps.length > 0 && (
        <div className="space-y-4">
          {step.substeps.map((substep, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`bg-gradient-to-r ${colors.bg} px-6 py-4 border-b ${colors.border}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${colors.button} text-white flex items-center justify-center text-sm font-semibold`}>
                    {index + 1}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{substep.title}</h2>
                </div>
              </div>
              <div className="px-6 py-5">
                <div className="prose prose-sm max-w-none">
                  {substep.content.split("\n").map((line, lineIndex) => {
                    if (line.trim() === "") return null;
                    
                    if (line.trim().startsWith("•")) {
                      const text = line.replace("•", "").trim();
                      const [boldPart, ...rest] = text.split(":");
                      
                      return (
                        <div key={lineIndex} className="flex gap-3 mb-3">
                          <div className="mt-1">
                            <ArrowRight className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
                          </div>
                          <p className="text-gray-700 flex-1">
                            {rest.length > 0 ? (
                              <>
                                <span className="font-semibold text-gray-900">{boldPart}:</span>
                                {rest.join(":")}
                              </>
                            ) : (
                              boldPart
                            )}
                          </p>
                        </div>
                      );
                    }
                    
                    return (
                      <p key={lineIndex} className="text-gray-700 mb-3 leading-relaxed">
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tips Section for specific steps */}
      {step.id === "solution" && (
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-3">💡 Conseil Important</h3>
          <p className="text-purple-800 leading-relaxed">
            La communication claire et transparente avec le client est essentielle. Assurez-vous
            d'expliquer toutes les options disponibles et de respecter les délais annoncés pour
            maintenir la confiance du client.
          </p>
        </div>
      )}

      {step.id === "reglementaire" && (
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl shadow-lg p-6 border border-indigo-200">
          <h3 className="text-lg font-semibold text-indigo-900 mb-3">⚖️ Attention Légale</h3>
          <p className="text-indigo-800 leading-relaxed">
            Le respect des obligations légales (RGPD, garanties légales, CGV) est crucial pour
            protéger l'entreprise et garantir les droits du consommateur. Toute action doit être
            documentée et traçable.
          </p>
        </div>
      )}

      {step.id === "suivi" && (
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl shadow-lg p-6 border border-pink-200">
          <h3 className="text-lg font-semibold text-pink-900 mb-3">📊 Amélioration Continue</h3>
          <p className="text-pink-800 leading-relaxed">
            Le suivi post-résolution permet non seulement de garantir la satisfaction du client,
            mais aussi d'identifier les problèmes récurrents et d'améliorer les processus internes
            pour éviter les futurs litiges.
          </p>
        </div>
      )}
    </div>
  );
}