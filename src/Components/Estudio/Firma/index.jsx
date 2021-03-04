import SignaturePad from 'react-signature-pad';
import './firma.css';

const Firma = () => {

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

  return (
    <div className="firma">
      <SignaturePad
        clearButton={true}
        ref="signature"
        onEnd={this.handleEnd}
      />
    </div>
  );

}

export default Firma;