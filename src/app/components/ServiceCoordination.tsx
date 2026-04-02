import {
  Users,
  Package,
  Truck,
  CreditCard,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface Service {
  id: string;
  name: string;
  icon: JSX.Element;
  color: string;
  role: string;
  responsibilities: string[];
}

export function ServiceCoordination() {
  const services: Service[] = [
    {
      id: "client",
      name: "Service Client",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      role: "Point de contact principal et coordinateur",
      responsibilities: [
        "Accuser réception de la réclamation du client",
        "Exprimer empathie et assurer une prise en charge immédiate",
        "Transmettre le dossier aux services concernés",
        "Communiquer les solutions proposées au client",
        "Effectuer le suivi post-résolution",
        "Envoyer questionnaire de satisfaction",
      ],
    },
    {
      id: "qualite",
      name: "Service Qualité",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      role: "Analyse et vérification du produit",
      responsibilities: [
        "Vérifier la conformité du produit",
        "Identifier la cause du défaut (fabrication ou transport)",
        "Analyser les photos et preuves fournies par le client",
        "Évaluer la gravité du dommage",
        "Déterminer si anomalie isolée ou problème systémique",
        "Participer à l'amélioration continue si litiges récurrents",
      ],
    },
    {
      id: "logistique",
      name: "Service Logistique",
      icon: <Truck className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      role: "Gestion de la livraison et du transport",
      responsibilities: [
        "Examiner les conditions de livraison",
        "Déterminer si problème de manutention ou d'emballage",
        "Vérifier la modalité de réception (colis, express, etc.)",
        "Organiser le remplacement ou l'échange si nécessaire",
        "Optimiser les processus d'emballage et transport",
        "Collaborer pour l'amélioration continue",
      ],
    },
    {
      id: "financier",
      name: "Service Financier",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      role: "Gestion des aspects financiers",
      responsibilities: [
        "Initier la procédure de remboursement",
        "Traiter les demandes de remboursement intégral",
        "Gérer les remboursements partiels",
        "Émettre les bons d'achat ou remises (geste commercial)",
        "Assurer le respect des délais de remboursement",
        "Documenter toutes les transactions",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-3">
            <Users className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Coordination Interservices
            </h1>
            <p className="text-lg text-gray-600">
              Rôles et responsabilités de chaque service dans le processus de résolution de litige
            </p>
          </div>
        </div>
      </div>

      {/* Process Flow Diagram */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Flux de Communication</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="bg-blue-100 rounded-xl px-6 py-3 font-semibold text-blue-900">
            Client
          </div>
          <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
          <div className="bg-blue-500 rounded-xl px-6 py-3 font-semibold text-white">
            Service Client
          </div>
          <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-green-500 rounded-xl px-4 py-3 font-semibold text-white text-sm text-center">
              Qualité
            </div>
            <div className="bg-orange-500 rounded-xl px-4 py-3 font-semibold text-white text-sm text-center">
              Logistique
            </div>
            <div className="bg-purple-500 rounded-xl px-4 py-3 font-semibold text-white text-sm text-center">
              Financier
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className={`bg-gradient-to-r ${service.color} px-6 py-5`}>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-white">
                  {service.icon}
                </div>
                <div className="text-white">
                  <h2 className="text-2xl font-semibold mb-1">{service.name}</h2>
                  <p className="text-sm opacity-90">{service.role}</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Responsabilités</h3>
              <ul className="space-y-3">
                {service.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Collaboration Tips */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
        <h2 className="text-2xl font-semibold mb-4">Clés d'une Collaboration Efficace</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur rounded-xl p-5">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
              <ArrowRight className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">Communication Rapide</h3>
            <p className="text-sm text-indigo-100 leading-relaxed">
              Transfert immédiat des dossiers entre services pour une résolution rapide
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-5">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">Traçabilité Complète</h3>
            <p className="text-sm text-indigo-100 leading-relaxed">
              Documentation de tous les échanges et décisions pour assurer la conformité
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-5">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">Approche Collaborative</h3>
            <p className="text-sm text-indigo-100 leading-relaxed">
              Travail d'équipe pour identifier et résoudre les problèmes récurrents
            </p>
          </div>
        </div>
      </div>

      {/* Legal Compliance Note */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl shadow-lg p-6">
        <div className="flex gap-4">
          <div className="bg-amber-100 rounded-lg p-3 h-fit">
            <ShieldCheck className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-amber-900 mb-2">
              Conformité et Documentation
            </h3>
            <p className="text-amber-800 leading-relaxed">
              Tous les services doivent respecter les obligations légales (garantie légale de
              conformité, RGPD, CGV) et maintenir une documentation complète de tous les échanges et
              décisions. Cette traçabilité est essentielle en cas de contrôle ou de litige
              ultérieur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
