import {
  ClipboardList,
  FileSearch,
  AlertCircle,
  CheckCircle,
  Users,
  TrendingUp,
  Scale,
  ArrowRight,
} from "lucide-react";
import { StepData, getStepColor } from "../App";

interface ProcessOverviewProps {
  onStepClick: (step: StepData) => void;
  onServicesClick: () => void;
}

export function ProcessOverview({ onStepClick, onServicesClick }: ProcessOverviewProps) {
  const stepsData: StepData[] = [
    {
      id: "classification",
      title: "1. Classification du Litige",
      description: "Étapes initiales pour classifier et analyser le litige",
      substeps: [
        {
          title: "Recueil des informations",
          content:
            "• Collecte des données de la commande : Numéro de commande, date d'achat, et identification du produit\n• Description du problème : Nature précise du dommage (casse, déformation, altération)\n• Contexte de la réclamation : Modalité de réception et premiers échanges",
        },
        {
          title: "Classification du litige",
          content:
            "• Litige produit : Problème de qualité du produit\n• Demande financière : Demande de remboursement\n• Litige en cascade : Vérification approfondie si multiples aspects",
        },
        {
          title: "Analyse préliminaire de la gravité",
          content:
            "• Évaluer si anomalie isolée ou risque de litige plus large\n• Vérifier les risques pour la sécurité ou l'image de marque",
        },
      ],
    },
    {
      id: "reception",
      title: "2. Accusé de Réception",
      description: "Réponse immédiate et contact initial avec le client",
      substeps: [
        {
          title: "Contact initial",
          content:
            'Répondre rapidement pour accuser réception de la réclamation, en exprimant empathie et assurant une prise en charge immédiate.\n\nExemple : "Bonjour Monsieur/Madame [Nom], nous sommes désolés d\'apprendre que le produit reçu présente un dommage. Nous prenons votre réclamation très au sérieux..."',
        },
      ],
    },
    {
      id: "diagnostic",
      title: "3. Diagnostic Interne",
      description: "Coordination interservices et évaluation du produit",
      substeps: [
        {
          title: "Transfert du dossier",
          content:
            "Le service client transmet le dossier aux services concernés :\n• Service Qualité : Vérifier la conformité et identifier la cause du défaut\n• Service Logistique : Examiner les conditions de livraison\n• Service Financier : Initier la procédure de remboursement",
        },
        {
          title: "Évaluation du produit",
          content:
            "Demander au client de fournir des photos ou preuves du dommage pour faciliter l'analyse par le service qualité",
        },
      ],
    },
    {
      id: "solution",
      title: "4. Proposition de Solution",
      description: "Choix et communication de la solution adaptée",
      substeps: [
        {
          title: "Choix de la solution",
          content:
            "Plusieurs options selon l'analyse interne :\n• Remboursement intégral : Si dommage significatif\n• Remplacement ou échange : Si stock disponible\n• Geste commercial : Remise ou bon d'achat pour compenser le désagrément",
        },
        {
          title: "Communication avec le client",
          content:
            "Informer clairement du choix de solution proposée, des modalités de mise en œuvre (délai de remboursement, réexpédition) et des étapes suivantes",
        },
      ],
    },
    {
      id: "suivi",
      title: "5. Suivi Post-résolution",
      description: "Vérification de la satisfaction et amélioration continue",
      substeps: [
        {
          title: "Vérification de la satisfaction",
          content:
            "Une fois la solution mise en œuvre :\n• Envoi d'un questionnaire de satisfaction\n• Appel de suivi par le service client",
        },
        {
          title: "Analyse des causes récurrentes",
          content:
            "Si ce type de litige se répète, lancer une démarche d'amélioration continue en impliquant les équipes qualité et logistique",
        },
      ],
    },
    {
      id: "reglementaire",
      title: "6. Aspects Réglementaires",
      description: "Conformité légale et documentation",
      substeps: [
        {
          title: "Droit de rétractation et garantie légale",
          content:
            "Le client bénéficie de la garantie légale de conformité et de la garantie contre les vices cachés.\nVérifier la conformité aux délais légaux (14 à 30 jours selon le droit de la consommation)",
        },
        {
          title: "Documentation et traçabilité",
          content:
            "• Traçabilité du dossier : Conserver un historique complet\n• Communication des obligations : Informer le client de ses droits\n• Respect du RGPD : Traiter les données personnelles conformément au RGPD",
        },
        {
          title: "Points clés",
          content:
            "• Transparence et Objectivité : Explications précises sur les bases légales\n• Conformité Contractuelle : S'appuyer sur les CGV\n• Documentation légale : Fournir une copie des informations relatives aux droits du client",
        },
      ],
    },
  ];

  const getStepIcon = (id: string) => {
    switch (id) {
      case "classification":
        return <FileSearch className="w-6 h-6" />;
      case "reception":
        return <ClipboardList className="w-6 h-6" />;
      case "diagnostic":
        return <AlertCircle className="w-6 h-6" />;
      case "solution":
        return <CheckCircle className="w-6 h-6" />;
      case "suivi":
        return <TrendingUp className="w-6 h-6" />;
      case "reglementaire":
        return <Scale className="w-6 h-6" />;
      default:
        return <FileSearch className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Scenario Description */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-start gap-4">
          <div className="bg-red-100 rounded-lg p-3">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Scénario</h2>
            <p className="text-gray-700 leading-relaxed">
              Un client reçoit un produit qui s'avère être endommagé. Il contacte le service client
              pour demander un remboursement et exprimer son mécontentement quant à la qualité du
              produit.
            </p>
          </div>
        </div>
      </div>

      {/* Process Flow */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Processus de Résolution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stepsData.map((step, index) => (
            <div key={step.id} className="relative">
              <button
                onClick={() => onStepClick(step)}
                className="w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-left border border-gray-200 hover:border-indigo-300 group"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${getStepColor(
                    step.id
                  )} text-white mb-4 group-hover:scale-110 transition-transform`}
                >
                  {getStepIcon(step.id)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 text-sm font-medium">
                  Voir les détails
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              {/* Connector Arrow */}
              {index < stepsData.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-10 h-10 text-indigo-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Services Coordination Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <button
          onClick={onServicesClick}
          className="w-full flex items-center justify-between group"
        >
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-3">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                Coordination Interservices
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Voir les rôles et responsabilités de chaque service
              </p>
            </div>
          </div>
          <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
        </button>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
        <h2 className="text-2xl font-semibold mb-4">Objectifs du Processus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Résolution Efficace</h3>
            <p className="text-sm text-indigo-100">
              Traiter le litige rapidement et de manière structurée
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Fidélisation Client</h3>
            <p className="text-sm text-indigo-100">
              Maintenir la confiance et la satisfaction du client
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Conformité Légale</h3>
            <p className="text-sm text-indigo-100">
              Respecter les obligations légales et réglementaires
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}