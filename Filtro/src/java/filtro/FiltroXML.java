
package filtro;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;


public class FiltroXML {
    private Document doc;
    private String busca;
    private String parametro;
    public FiltroXML(String parametro, String busca) throws ParserConfigurationException, SAXException, IOException {

DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
DocumentBuilder builder =factory.newDocumentBuilder();
 doc =builder.parse("livraria.xml");
 this.busca=busca;
 this.parametro=parametro;
    }
    
    public int qtdFilho(){
        return doc.getDocumentElement().getElementsByTagName(parametro).getLength();
    }
    public String pegaFilhos(){
        String atual="";
        String text="";
        Node raiz=doc.getDocumentElement();
        NodeList filhos=doc.getDocumentElement().getElementsByTagName(parametro);
        Node[] controu= new Node[5];
        for (int i=0;i<qtdFilho();i++)
        {
            
            if(filhos.item(i).getNodeType()==Node.ELEMENT_NODE){
            Element filho=(Element)filhos.item(i);
            atual=filho.getNodeName()+":"+filho.getFirstChild().getNodeValue();
           if(atual.split(":")[1].equalsIgnoreCase(busca)){
            controu[0]=filho.getParentNode();
            }
            }
        }
        return text;
    }
    

    
    public static void main(String[] args) {
        try {
           FiltroXML nota=new FiltroXML("ano","2003");
             System.out.println(nota.pegaFilhos());
        } catch (ParserConfigurationException | SAXException | IOException ex) {
            Logger.getLogger(FiltroXML.class.getName()).log(Level.SEVERE, null, ex);
        }
        
    }
    
}
