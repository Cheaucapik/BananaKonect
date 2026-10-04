import './AllFilters.css'
import { X, RotateCcw, MapPin, ChevronDown, ChevronUp } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function AllFilters({ onClose }) {
    const [isEventOpen, setIsEventOpen] = useState(true)
    const [isServiceOpen, setIsServiceOpen] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const formRef = useRef(null)

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 10)
        return () => clearTimeout(timer)
    }, [])

    const handleClose = () => {
        setIsOpen(false)
        setTimeout(() => {
            onClose()
        }, 350)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleClose()
    }

    const handleReset = () => {
        if (formRef.current) {
            formRef.current.reset()
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (formRef.current && !formRef.current.contains(event.target)) {
                handleClose()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className={`filters-modal-overlay ${isOpen ? 'open' : ''}`}>
            <form ref={formRef} onSubmit={handleSubmit} className="filters-modal-content">

                <div className="filters-modal-header">
                    <button type="button" className="filters-close-btn" onClick={handleClose} aria-label="Fermer">
                        <X size={22} color="#0E1F35" />
                    </button>
                    <h2>FILTRES</h2>
                    <button type="button" className="filters-reset-btn" onClick={handleReset}>
                        <RotateCcw size={16} />
                        <span>Réinitialiser</span>
                    </button>
                </div>

                <div className="filters-modal-body">

                    <div className="filter-group">
                        <div className="filter-group-title" onClick={() => setIsEventOpen(!isEventOpen)}>
                            <span>Type d'événement</span>
                            {isEventOpen ? <ChevronUp size={18} color="#0E1F35" /> : <ChevronDown size={18} color="#0E1F35" />}
                        </div>

                        <div className={`filter-collapsible ${isEventOpen ? 'open' : ''}`}>
                            <div className="filter-options-list">
                                <label className="filter-option">
                                    <input type="checkbox" defaultChecked />
                                    <span>Tous les événements</span>
                                </label>
                                <label className="filter-option"><input type="checkbox" /><span>💍 Mariage</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>🎂 Anniversaire</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>🎉 Soirée privée</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>💼 Événement d'entreprise</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>👥 Association</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>🏀 Événement sportif</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>🎪 Festival / Public</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>👶 Événement pour enfants</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>🎄 Fête de fin d'année</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>⋯ Autre</span></label>
                            </div>
                        </div>
                    </div>

                    <div className="filter-group">
                        <div className="filter-group-title" onClick={() => setIsServiceOpen(!isServiceOpen)}>
                            <span>Catégorie de service</span>
                            {isServiceOpen ? <ChevronUp size={18} color="#0E1F35" /> : <ChevronDown size={18} color="#0E1F35" />}
                        </div>

                        <div className={`filter-collapsible ${isServiceOpen ? 'open' : ''}`}>
                            <div className="filter-options-list">
                                <label className="filter-option">
                                    <input type="checkbox" defaultChecked />
                                    <span>Tous les services</span>
                                </label>
                                <label className="filter-option"><input type="checkbox" /><span>🎧 DJ / Musique</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>📷 Photographe / Vidéo</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>🎤 Animation</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>🍽️ Traiteur</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>🌸 Décoration</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>📦 Location de matériel</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>🏰 Structures & Jeux</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>🔊 Son / Lumière</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>🚐 Transport</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>🛡️ Sécurité</span></label>
                                <label className="filter-option"><input type="checkbox" /><span>⋯ Autre</span></label>
                            </div>
                        </div>
                    </div>

                    <div className="filter-group">
                        <span className="filter-section-label">Localisation</span>
                        <div className="filter-search-input-wrapper">
                            <MapPin size={16} color="#6b7280" />
                            <input type="text" placeholder="Ville ou code postal..." />
                        </div>
                    </div>

                    <div className="filter-group">
                        <span className="filter-section-label">Rayon</span>
                        <div className="filter-radio-grid">
                            <label className="filter-radio">
                                <input type="radio" name="rayon" />
                                <span>10 km</span>
                            </label>
                            <label className="filter-radio">
                                <input type="radio" name="rayon" defaultChecked />
                                <span>25 km</span>
                            </label>
                            <label className="filter-radio">
                                <input type="radio" name="rayon" />
                                <span>50 km</span>
                            </label>
                            <label className="filter-radio">
                                <input type="radio" name="rayon" />
                                <span>Toute la France</span>
                            </label>
                        </div>
                    </div>

                </div>

                <div className="filters-modal-footer">
                    <button type="submit" className="filters-apply-btn">
                        Afficher les résultats
                    </button>
                </div>

            </form>
        </div>
    )
}