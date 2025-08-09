'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Package, 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  BarChart3,
  Download,
  Upload,
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react'

interface Product {
  id: number
  name: string
  sku: string
  category: string
  quantity: number
  minStock: number
  price: number
  supplier: string
  lastUpdate: string
  status: 'ok' | 'low' | 'out'
}

export default function SistemaEstoquePage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Notebook Dell Inspiron',
      sku: 'NB-DELL-001',
      category: 'Eletrônicos',
      quantity: 25,
      minStock: 10,
      price: 2599.99,
      supplier: 'Dell Brasil',
      lastUpdate: '2024-01-08',
      status: 'ok'
    },
    {
      id: 2,
      name: 'Mouse Logitech MX Master',
      sku: 'MS-LOGI-002',
      category: 'Acessórios',
      quantity: 8,
      minStock: 15,
      price: 299.99,
      supplier: 'Logitech',
      lastUpdate: '2024-01-07',
      status: 'low'
    },
    {
      id: 3,
      name: 'Teclado Mecânico RGB',
      sku: 'KB-MECH-003',
      category: 'Acessórios',
      quantity: 0,
      minStock: 5,
      price: 450.00,
      supplier: 'HyperX',
      lastUpdate: '2024-01-05',
      status: 'out'
    },
    {
      id: 4,
      name: 'Monitor LG 27" 4K',
      sku: 'MON-LG-004',
      category: 'Eletrônicos',
      quantity: 12,
      minStock: 8,
      price: 1899.99,
      supplier: 'LG Electronics',
      lastUpdate: '2024-01-08',
      status: 'ok'
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)
  const [newProduct, setNewProduct] = useState({
    name: '',
    sku: '',
    category: '',
    quantity: 0,
    minStock: 0,
    price: 0,
    supplier: ''
  })

  const categories = ['all', 'Eletrônicos', 'Acessórios', 'Periféricos', 'Software']

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const stats = {
    totalProducts: products.length,
    totalValue: products.reduce((sum, p) => sum + (p.quantity * p.price), 0),
    lowStock: products.filter(p => p.status === 'low').length,
    outOfStock: products.filter(p => p.status === 'out').length
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ok': return 'text-cyber-green'
      case 'low': return 'text-cyber-yellow'
      case 'out': return 'text-cyber-pink'
      default: return 'text-gray-400'
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'ok': return 'bg-cyber-green/10 border-cyber-green/30'
      case 'low': return 'bg-cyber-yellow/10 border-cyber-yellow/30'
      case 'out': return 'bg-cyber-pink/10 border-cyber-pink/30'
      default: return 'bg-gray-400/10'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ok': return <CheckCircle className="h-4 w-4" />
      case 'low': return <AlertTriangle className="h-4 w-4" />
      case 'out': return <Clock className="h-4 w-4" />
      default: return <Package className="h-4 w-4" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ok': return 'Em Estoque'
      case 'low': return 'Estoque Baixo'
      case 'out': return 'Esgotado'
      default: return 'Indefinido'
    }
  }

  const addProduct = () => {
    if (!newProduct.name || !newProduct.sku) return

    const product: Product = {
      id: Date.now(),
      ...newProduct,
      lastUpdate: new Date().toISOString().split('T')[0],
      status: newProduct.quantity === 0 ? 'out' : 
              newProduct.quantity <= newProduct.minStock ? 'low' : 'ok'
    }

    setProducts([...products, product])
    setNewProduct({
      name: '',
      sku: '',
      category: '',
      quantity: 0,
      minStock: 0,
      price: 0,
      supplier: ''
    })
    setShowAddModal(false)
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        const status = newQuantity === 0 ? 'out' : 
                      newQuantity <= product.minStock ? 'low' : 'ok'
        return {
          ...product,
          quantity: newQuantity,
          status,
          lastUpdate: new Date().toISOString().split('T')[0]
        }
      }
      return product
    }))
  }

  const deleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id))
  }

  const exportData = () => {
    const csvContent = [
      ['Nome', 'SKU', 'Categoria', 'Quantidade', 'Estoque Mín.', 'Preço', 'Fornecedor', 'Status'],
      ...products.map(p => [
        p.name, p.sku, p.category, p.quantity, p.minStock, p.price, p.supplier, getStatusText(p.status)
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'estoque.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen pt-20 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-cyber-green to-cyber-blue rounded-2xl">
              <Package className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-cyber font-bold text-white mb-6">
            Sistema de <span className="text-cyber-green">Estoque</span>
          </h1>
          <p className="text-xl text-gray-400 font-tech max-w-3xl mx-auto leading-relaxed">
            Controle total e profissional do seu estoque. Organize produtos, evite perdas e tome decisões com base em dados em tempo real.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {[
            {
              title: 'Total de Produtos',
              value: stats.totalProducts,
              icon: Package,
              color: 'text-cyber-blue',
              bg: 'bg-cyber-blue/10'
            },
            {
              title: 'Valor do Estoque',
              value: `R$ ${stats.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
              icon: DollarSign,
              color: 'text-cyber-green',
              bg: 'bg-cyber-green/10'
            },
            {
              title: 'Estoque Baixo',
              value: stats.lowStock,
              icon: AlertTriangle,
              color: 'text-cyber-yellow',
              bg: 'bg-cyber-yellow/10'
            },
            {
              title: 'Esgotados',
              value: stats.outOfStock,
              icon: Clock,
              color: 'text-cyber-pink',
              bg: 'bg-cyber-pink/10'
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className={`cyber-card hover:scale-105 transition-transform duration-300 ${stat.bg}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className={`text-2xl font-cyber font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-tech">
                    {stat.title}
                  </div>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="cyber-card mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="cyber-input w-full pl-10 pr-4 py-3"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="cyber-input py-3 px-4 min-w-40"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'Todas Categorias' : cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={exportData}
                className="cyber-button px-6 py-3"
              >
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </button>
              <button
                onClick={() => setShowAddModal(true)}
                className="cyber-button-glow px-6 py-3"
              >
                <Plus className="h-4 w-4 mr-2" />
                Novo Produto
              </button>
            </div>
          </div>
        </motion.div>

        {/* Products Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="cyber-card overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-cyber-blue/30">
                <th className="text-left py-4 px-4 font-tech font-semibold text-white">Produto</th>
                <th className="text-left py-4 px-4 font-tech font-semibold text-white">SKU</th>
                <th className="text-left py-4 px-4 font-tech font-semibold text-white">Categoria</th>
                <th className="text-center py-4 px-4 font-tech font-semibold text-white">Quantidade</th>
                <th className="text-center py-4 px-4 font-tech font-semibold text-white">Preço</th>
                <th className="text-center py-4 px-4 font-tech font-semibold text-white">Status</th>
                <th className="text-center py-4 px-4 font-tech font-semibold text-white">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="border-b border-cyber-blue/10 hover:bg-cyber-blue/5"
                >
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-tech font-semibold text-white">{product.name}</div>
                      <div className="text-sm text-gray-400">{product.supplier}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4 font-tech text-gray-300">{product.sku}</td>
                  <td className="py-4 px-4 font-tech text-gray-300">{product.category}</td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => updateQuantity(product.id, Math.max(0, product.quantity - 1))}
                        className="w-6 h-6 bg-cyber-pink/20 text-cyber-pink rounded hover:bg-cyber-pink/40 transition-colors"
                      >
                        -
                      </button>
                      <span className="font-tech text-white min-w-8 text-center">{product.quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, product.quantity + 1)}
                        className="w-6 h-6 bg-cyber-green/20 text-cyber-green rounded hover:bg-cyber-green/40 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Mín: {product.minStock}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center font-tech text-white">
                    R$ {product.price.toFixed(2)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full border text-xs font-tech ${getStatusBg(product.status)}`}>
                      <span className={getStatusColor(product.status)}>
                        {getStatusIcon(product.status)}
                      </span>
                      <span className={getStatusColor(product.status)}>
                        {getStatusText(product.status)}
                      </span>
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center space-x-2">
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="p-2 text-cyber-pink hover:bg-cyber-pink/20 rounded transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 font-tech">Nenhum produto encontrado</p>
            </div>
          )}
        </motion.div>

        {/* Add Product Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-bg/90 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-md cyber-card"
            >
              <h3 className="text-2xl font-tech font-bold text-white mb-6">
                Novo Produto
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">Nome do Produto</label>
                  <input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    className="cyber-input w-full"
                    placeholder="Ex: Notebook Dell"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">SKU</label>
                  <input
                    type="text"
                    value={newProduct.sku}
                    onChange={(e) => setNewProduct({...newProduct, sku: e.target.value})}
                    className="cyber-input w-full"
                    placeholder="Ex: NB-DELL-001"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">Categoria</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                    className="cyber-input w-full"
                  >
                    <option value="">Selecione uma categoria</option>
                    {categories.slice(1).map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">Quantidade</label>
                    <input
                      type="number"
                      value={newProduct.quantity}
                      onChange={(e) => setNewProduct({...newProduct, quantity: parseInt(e.target.value) || 0})}
                      className="cyber-input w-full"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-tech text-gray-300 mb-2">Estoque Mín.</label>
                    <input
                      type="number"
                      value={newProduct.minStock}
                      onChange={(e) => setNewProduct({...newProduct, minStock: parseInt(e.target.value) || 0})}
                      className="cyber-input w-full"
                      min="0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">Preço (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: parseFloat(e.target.value) || 0})}
                    className="cyber-input w-full"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-tech text-gray-300 mb-2">Fornecedor</label>
                  <input
                    type="text"
                    value={newProduct.supplier}
                    onChange={(e) => setNewProduct({...newProduct, supplier: e.target.value})}
                    className="cyber-input w-full"
                    placeholder="Ex: Dell Brasil"
                  />
                </div>
              </div>

              <div className="flex space-x-3 pt-6 border-t border-cyber-blue/20 mt-6">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-3 border border-cyber-blue/30 rounded-lg text-gray-300 hover:bg-cyber-blue/10 transition-colors font-tech"
                >
                  Cancelar
                </button>
                <button
                  onClick={addProduct}
                  className="flex-1 cyber-button-glow py-3"
                >
                  Adicionar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}


